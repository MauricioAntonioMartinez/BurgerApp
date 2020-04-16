import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-95412.firebaseio.com/",
});

export default instance;
