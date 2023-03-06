import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { City } from "./types/City";
import CityList from "./components/CityList";
import { getRandomCities,  cities as Cities } from "./utils/mapboxUtils";

const App: React.FC = () => {
  const cities: City[] = getRandomCities(20, Cities);

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <h1>

        This is from App.jsx
        </h1>
        <CityList cities={cities} />
      </div>
    </div>
  );
};

export default App;
