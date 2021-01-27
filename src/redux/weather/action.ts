import weatherRequest from "../../services/weatherService";
import {
  WEATHER_DATA_FAILURE,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
} from "./types";

export const fetchWeather = (lat: number, lon: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(weatherDataRequest());
      const data = await weatherRequest({
        url: `/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`,
        method: "GET",
      });
      dispatch(weatherDataSuccess(data));
    } catch (err) {
      dispatch(weatherDataFailure());
      console.log(err);
    }
  };
};

const weatherDataRequest = () => {
  return {
    type: WEATHER_DATA_REQUEST,
  };
};

const weatherDataSuccess = (data: object) => {
  return {
    type: WEATHER_DATA_SUCCESS,
    payload: data,
  };
};

const weatherDataFailure = () => {
  return {
    type: WEATHER_DATA_FAILURE,
  };
};
