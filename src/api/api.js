import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "http://192.168.1.56:8080/",
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      Accept: "application/json"
    }
  });
};
