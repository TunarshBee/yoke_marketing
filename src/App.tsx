import React from "react";
import "./App.css";
import { City } from "./types/City";
import CityList from "./components/CityList";
import { getRandomCities } from "./utils/mapboxUtils";

const App: React.FC = () => {
  const cities: City[] = getRandomCities(20);

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <CityList cities={cities} />
      </div>
    </div>
  );
};

export default App;
