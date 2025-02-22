import React, { useState, useEffect } from 'react';
import { designs } from '../components/styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { deleteDoc, addDoc, query, collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
import AppID from '../utils/AppID';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Pressable,
    View,
    Dimensions,
    Image,
    Alert
} from 'react-native';


let width = Dimensions.get('window').width

export default function SwipeList({ list }) {
    const [listData, setListData] = useState(list);
    const [show, setShow] = useState({})
    let appID = AppID()
    const banListRef = collection(db, "ban_list");
    const kickListRef = collection(db, "kick_list");
    const [banList, setBanList] = useState([]);
    const [kickList, setKickList] = useState([]);
    const [kickListsFetching, setKickListFetching] = useState(true)

    useEffect(() => {
        (async () => {
            const banCursor = await getDocs(banListRef)
            const banList = []
            banCursor.forEach(item => banList.push(item.data()))
            setBanList(banList);

            const kickCursor = await getDocs(kickListRef)
            const kickList = []
            kickCursor.forEach(item => kickList.push(item.data()))
            setKickList(kickList);
            setKickListFetching(false)
        })();
    },[])

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const kickUser = (inviteid,appID) => {
        Alert.alert(
            //This is title
            'User Kick/Ban Confirmation',
            //This is body text
            'Are you sure you want to kick/ban user?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
                {
                    text: 'Kick', onPress: () => {
                        console.log('Kick Pressed')
                        if (kickList.find(item => item.appID === appID && item.inviteid === inviteid)) {
                            Alert.alert('Already Kicked User!', 'User has already been kicked')
                        } else {
                            addDoc(collection(db, "kick_list"), { appID, inviteid });
                            Alert.alert('Kicked User!', 'User has been kicked')
                        }
                    }
                },
                {
                    text: 'Ban', onPress: () => {
                        console.log('Ban Pressed')
                        if (banList.find(item => item.appID === appID)) {
                            Alert.alert('Already Banned User!', 'User has already been banned')
                        } else {
                            addDoc(collection(db, "ban_list"), { appID });
                            Alert.alert('Banned User!', 'User has been banned')
                        }
                    }
                },
            ],
            { cancelable: true }
        );
    }

    const deleteRow = (rowMap, reportid, rowKey) => {
        Alert.alert('Confirm deletion', 'Are you sure you want to delete?', [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    closeRow(rowMap, rowKey);
                    const newData = [...listData];
                    const prevIndex = listData.map(i => i.data()).findIndex(item => item.reportid === reportid);
                    deleteDoc(listData[prevIndex].ref)
                    newData.splice(prevIndex, 1);
                    setListData(newData);

                }
            },
        ]);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    function renderItem(data, rowMap) {
        const report = data.item;
        var base64Image = 'data:image/png;base64,' + report.image;
        return (
            <>
                <Pressable
                    onPress={() => {
                        show[report.reportid] = !show[report.reportid]
                        rowMap[data.item.key].closeRow()
                        setShow({ ...show })

                    }}
                    style={styles.rowFront}
                >
                    <View>
                        <Text style={{position:'absolute', left: 10}}> {report.date}</Text>
                        <Text style={styles.title}>{report.project}</Text>
                    </View>
                </Pressable>
                {show[report.reportid] ?
                    <View style={{ height: 'auto', paddingLeft: 10 }}>
                        <Text style={designs.reportText}><Text style={designs.boldText}> Report ID: </Text> {report.reportid}</Text>
                        <Text style={designs.reportText}> Can you make this a <Text style={designs.boldText}>safe condition: </Text> {report.choice}</Text>
                        <Text style={designs.reportText}><Text style={designs.boldText}> Project Name: </Text> {report.project}</Text>
                        <Text style={designs.reportText}><Text style={designs.boldText}> Project Floor: </Text> {report.floor}</Text>
                        <Text style={designs.reportText}><Text style={designs.boldText}> Section Area: </Text> {report.section}</Text>
                        <Text style={designs.reportText}><Text style={designs.boldText}> Unsafe Conditions: </Text> {report.condition}</Text>
                        <Text style={designs.reportText}><Text style={designs.boldText}> Comments: </Text> {report.comment}</Text>
                        <Image style={{ height: 200, width: 200, borderWidth: 1, alignSelf: 'center' }} resizeMode="contain" objectFit="contain" source={{ uri: base64Image }} />
                    </View>
                    : null}
            </>
        );
    }

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            {data.item.appID &&
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnLeft]}
                    onPress={() => kickUser(data.item.inviteid, data.item.appID)}
                >
                    <Text style={styles.backTextWhite}>Kick</Text>
                </TouchableOpacity>
            }
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.reportid, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <SwipeListView
                data={listData.map((i, key) => ({ ...i.data(), key })).sort((a,b)=> b.reportid - a.reportid)}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={0}
                rightOpenValue={-175}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </View>
    );




}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: 'wheat',
        marginVertical: 10,
    },
    title: {
        width: width * 1,
        textAlign: 'center'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'wheat',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginVertical: 10,
        height: 50,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});