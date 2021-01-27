import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/reducers";
import { fetchNews } from "../../redux/news/action";
import { fetchWeather } from "../../redux/weather/action";
import SelectChip from "../chip";
import CustomInput from "../customInput";
import { CHIP_SELECT } from "./constants";
import LocationCityIcon from "@material-ui/icons/LocationCity";

const Header = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<string>("technology");
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 9.967, longitude: 76.2917 });
  const { data: weatherData } = useSelector(
    (state: RootState) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    dispatch(fetchNews(category, searchText, 1, false));
  }, [category, searchText, dispatch]);

  useEffect(() => {
    dispatch(fetchWeather(coordinates.latitude, coordinates.longitude));
  }, [dispatch, coordinates]);

  const handleSearchInputChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleChipClick = (key: any) => {
    setCategory(key);
  };

  async function getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        setCoordinates(coords);
      });
    }
  }

  const getTempInCelcius = (temp: number) => {
    return Math.round(temp / 10);
  };

  return (
    <div className="header">
      <div className="header__title">Latest News</div>
      <div className="header__sub-title">Your insights to keep you afloat</div>
      <div className="header__weather">
        <LocationCityIcon /> {weatherData?.name} -{" "}
        {getTempInCelcius(weatherData?.main?.temp)}&#8451;
      </div>
      <div className="header__tool">
        <div className="header__tool-search">
          <CustomInput
            label={"Search"}
            onChange={handleSearchInputChange}
            value={searchText}
          />
        </div>
        <div className="header__tool-chip">
          {CHIP_SELECT.map((chip) => (
            <SelectChip
              key={chip.id}
              label={chip.label}
              isSelected={category === chip.key}
              onClick={() => handleChipClick(chip.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
