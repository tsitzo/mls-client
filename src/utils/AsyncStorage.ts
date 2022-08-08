import AsyncStorage from "@react-native-async-storage/async-storage";

type KeyValue = [string, any];

export const multiSet = async (keyValue1: KeyValue, keyValue2: KeyValue) => {
  try {
    await AsyncStorage.multiSet([keyValue1, keyValue2]);
  } catch (e) {
    console.log(e);
  }
};

export const multiGet = async (key1: string, key2: string) => {
  let values;
  try {
    values = await AsyncStorage.multiGet([key1, key2]);
  } catch (e) {
    console.log(e);
  }
  return values;
};

export const removeMultiple = async (key1: string, key2: string) => {
  try {
    await AsyncStorage.multiRemove([key1, key2]);
  } catch (error) {
    console.log(error);
  }
};
