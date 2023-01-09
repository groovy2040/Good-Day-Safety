import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}


export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}


export const storeForm = async (key, value) => {
  try {
    const jsonValue = await AsyncStorage.getItem('form')
    return jsonValue != null ? JSON.stringify({ [key]: value,  ...JSON.parse(jsonValue)}) : null;
    
  } catch (error) {
    
  }
}