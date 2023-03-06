import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Map from "../Map";

describe("Map", () => {
  const mockCity = {
    id: 1,
    name: "New York",
    country: "US",
    lat: 40.712776,
    lng: -74.005974
  }
  
  const mockWeather = {
    today: { description: "sunny", temperature: 20 },
    tomorrow: { description: "cloudy", temperature: 18 },
  };

  it("displays a map and weather information when an icon is clicked", async () => {
    const getWeatherForCoordinatesMock = jest
      .fn()
      .mockResolvedValue(mockWeather);
    
    const { getByTestId } = render(
      <Map
        {...mockCity}
        
      />
    );

    const icon = getByTestId("city-icon");
    fireEvent.click(icon);

    const weatherToday = await screen.findByTestId("weather-today");
    expect(weatherToday).toHaveTextContent("Today: sunny, 20°C");

    const weatherTomorrow = await screen.findByTestId("weather-tomorrow");
    expect(weatherTomorrow).toHaveTextContent("Tomorrow: cloudy, 18°C");

    expect(getWeatherForCoordinatesMock).toHaveBeenCalledWith(
      mockCity.lat,
      mockCity.lng
    );
  });
});
