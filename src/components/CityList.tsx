import React, { useState } from "react";
import { City } from "../types/City";
import Map from "./Map";

interface CityListProps {
  cities: City[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm)
    );
    setFilteredCities(filtered);
  };

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  return (
    <div className="city-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Filter cities"
          onChange={handleFilterChange}
        />
      </div>
      <div className="city-list">
        {filteredCities.length > 0
          ? filteredCities.map((city) => (
              <div
                key={city.id}
                className={`city-list-item ${
                  selectedCity?.id === city.id ? "active" : ""
                }`}
                onClick={() => handleCityClick(city)}
              >
                {city.name}
              </div>
            ))
          : cities.map((city) => (
              <div
                key={city.id}
                className={`city-list-item ${
                  selectedCity?.id === city.id ? "active" : ""
                }`}
                onClick={() => handleCityClick(city)}
              >
                {city.name}
              </div>
            ))}
      </div>
      {selectedCity && (
        <div className="map-container">
          <Map lat={selectedCity.lat} lng={selectedCity.lng} />
        </div>
      )}
    </div>
  );
};

export default CityList;
