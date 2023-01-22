import AsyncStorage from '@react-native-async-storage/async-storage';

const memory = {}; //we use module variable as fast cache

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    memory[key] = value
    //console.log(memory,'write')
    await AsyncStorage.setItem(key, jsonValue)

  } catch (e) {
    // saving error
  }
}


export const getData = async (key) => {
  try {
    let jsonValue = memory[key]
    //console.log(memory,'read')
    //alert(JSON.stringify(memory))
    if(jsonValue === undefined){
      jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
    return jsonValue
  } catch(e) {
    // error reading value
  }
}

export const storeReport = async (field, value) => {
  try {
    const existingReport = await getData('report') || {};
    await storeData('report', {...existingReport, [field]: value })
  } catch (error) {
    
  }
}