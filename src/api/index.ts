import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({ baseURL: "http://localhost:3000/api/v1" });

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@MLS/Token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
