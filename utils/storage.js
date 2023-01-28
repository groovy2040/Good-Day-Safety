import AsyncStorage from '@react-native-async-storage/async-storage';

const memory = {}; 

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    memory[key] = value
    await AsyncStorage.setItem(key, jsonValue)

  } catch (e) {
  }
}


export const getData = async (key) => {
  try {
    let jsonValue = memory[key]
    if(jsonValue === undefined){
      jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
    return jsonValue
  } catch(e) {
  }
}

export const storeReport = async (field, value) => {
  try {
    const existingReport = await getData('report') || {};
    await storeData('report', {...existingReport, [field]: value })
  } catch (error) {
    
  }
}