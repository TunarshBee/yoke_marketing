import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { getWeatherForCoordinates } from '../utils/weatherAPI';

interface MapProps {
  lat: number;
  lng: number;
}

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || "";
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 10,
    });
    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, [lat, lng]);

  useEffect(() => {
    if (map) {
      const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
      marker.getElement().classList.add("weather-marker");
      marker.getElement().addEventListener("click", async () => {
        const weather = await getWeatherForCoordinates(lat, lng);
        new mapboxgl.Popup()
          .setLngLat([lng, lat])
          .setHTML(
            `<div className="popup-content">
              <div className="popup-header">
                <h3>${weather.city.name}</h3>
                <img src="https://openweathermap.org/img/w/${
                  weather.list[0].weather[0].icon
                }.png" alt="${weather.list[0].weather[0].description}">
              </div>
              <div className="popup-body">
                <div className="today-forecast">
                  <h4>Today</h4>
                  <p>${Math.round(weather.list[0].main.temp)}°C</p>
                </div>
                <div className="tomorrow-forecast">
                  <h4>
                  Tomorrow</h4>
                  <p>${Math.round(weather.list[1].main.temp)}°C</p>
                </div>
              </div>
            </div>`
          )
          .addTo(map);
      });
    }
  }, [lat, lng, map]);

  return <div id="map" className="map"></div>
};

export default Map;