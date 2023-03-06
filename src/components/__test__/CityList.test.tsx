import React from "react";
import { render, screen } from "@testing-library/react";
import CityList from "../CityList";

describe("CityList", () => {
  const mockCities = [
    { id: 1, name: "New York", country: "US", lat: 40.712776, lng: -74.005974 },
    { id: 2, name: "London", country: "GB", lat: 51.507351, lng: -0.127758 },
  ];

  it("renders a list of cities", () => {
    render(<CityList cities={mockCities} />);
    const cityListItems = screen.getAllByRole("listitem");
    expect(cityListItems).toHaveLength(2);
    expect(cityListItems[0]).toHaveTextContent("New York");
    expect(cityListItems[1]).toHaveTextContent("London");
  });
});
