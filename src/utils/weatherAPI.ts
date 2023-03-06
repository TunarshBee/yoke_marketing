import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY || "";

export const getWeatherForCoordinates = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
