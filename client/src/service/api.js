import axios from "axios";

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/config";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  getType,
} from "../utils/common-utils";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

// Axios interceptors are functions that run for every request or response before the request or response is handled by then or catch. In this case, the request interceptor is added to the axiosInstance. The interceptor function takes two arguments: config and error.
axiosInstance.interceptors.request.use(
  function (config) {
    if (config.TYPE.params) {
      config.params = config.TYPE.params; //useful for adding parameters to the request.
    } else if (config.TYPE.query) {
      config.url = config.url + "/" + config.TYPE.query; //useful for adding a query string to the URL.
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // if http request successful, Stop global loader here
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here
    return Promise.reject(ProcessError(error));
  }
);

//////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }
//////////////////////////////
const processResponse = (response) => {
  if (response?.status === 200) {
    // If response is not null or undefined, it will access the status propert, else evaluate to undefined, not give error.
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isError: true, status: string, msg: string, code: int }
//////////////////////////////
const ProcessError = async (error) => {
  if (error.response) {
    if (error.response?.status === 403) {
      sessionStorage.clear();
    } else {
      console.log("ERROR IN RESPONSE: ", error.toJSON());
      return {
        isError: true,
        msg: API_NOTIFICATION_MESSAGES.responseFailure,
        code: error.response.status,
      };
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.log("ERROR IN RESPONSE: ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: "",
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("ERROR IN RESPONSE: ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: "",
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  // iterate through all key-value pairs of service urls (config.js file)
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: value.method === "DELETE" ? "" : body,
      responseType: value.responseType,
      headers: {
        authorization: getAccessToken(),
      },
      TYPE: getType(value, body),
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentCompleted);
        }
      },
    });
}

export { API };
