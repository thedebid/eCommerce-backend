import axios from "axios";
const BaseURL = "http://localhost:8080/api/v1/";
//const BaseURL = "http://192.168.1.74:3002/api/v1/";

const http = axios.create({
  baseURL: BaseURL,
  responseType: "json",
});

function getHeaders(isSecured) {
  let options = {
    "Content-Type": "application/json",
  };
  if (isSecured) {
    options["Authorization"] = localStorage.getItem("token");
  }
  return options;
}

function POST(url, data, isSecure = false, params = {}) {
  // console.log(data, isSecure);
  /// console.log(data);
  return http.post(url, data, {
    headers: getHeaders(isSecure),
    params,
  });
}

function GET(url, isSecure = true, params = {}) {
  return http.get(url, {
    headers: getHeaders(isSecure),
    params,
  });
}

export default {
  POST,
  GET,
};
