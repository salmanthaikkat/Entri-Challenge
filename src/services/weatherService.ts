import axios, { AxiosRequestConfig } from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

const weatherRequest = (options: AxiosRequestConfig) => {
  const onSuccess = (response: { data: any }) => response.data;

  const onError = (error: {
    code: string;
    message: any;
    response: { data: any };
  }) => {
    if (error.code === "ECONNABORTED") {
      console.log("Error", error);
    } else {
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response ? error.response.data : error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default weatherRequest;
