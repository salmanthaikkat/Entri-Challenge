import {
  WEATHER_DATA_FAILURE,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  data: null,
};

const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WEATHER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case WEATHER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case WEATHER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};

export default weatherReducer;
