import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { City } from "../types/City";
import TableLayout from "./layouts/Table";
import Map from "./Map";

interface CityListProps {
  cities: City[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [showList, setShowList] = useState<Boolean | true>(true);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    let filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm)
    );
    setFilteredCities(filtered);
  };

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
    setShowList(false)
  };

  return (
    <div className="city-list-container">
      <div className="search-container">
        <Form.Label htmlFor="inputPassword5">Filter Cities</Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          onChange={handleFilterChange}
        />
      </div>
      <div className="city-list">
        {filteredCities.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>City Name</th>
                <th>Country Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            {filteredCities.map((city) => (
              <tbody
                key={city.id}
                className={`city-list-item cityListName ${
                  selectedCity?.id === city.id ? "active" : ""
                }`}
                onClick={() => handleCityClick(city)}
              >
                <TableLayout
                  name={city.name}
                  country={city.country}
                  lat={city.lat}
                  lng={city.lng}
                />
              </tbody>
            ))}
          </Table>
        ) : showList === true ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>City Name</th>
                <th>Country Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            {cities.map((city) => (
              <tbody
                key={city.id}
                className={`city-list-item cityListName ${
                  selectedCity?.id === city.id ? "active" : ""
                }`}
                onClick={() => handleCityClick(city)}
              >
                <TableLayout
                  name={city.name}
                  country={city.country}
                  lat={city.lat}
                  lng={city.lng}
                />
              </tbody>
            ))}
          </Table>
        ) : (
          <div></div>
        )}
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
