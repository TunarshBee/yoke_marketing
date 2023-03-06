import { City } from "../types/City";

export const getRandomCities = (count: number): City[] => {
  const cities: City[] = [
    {
      id: 1,
      name: "New York",
      country: "US",
      lat: 40.712776,
      lng: -74.005974,
    },
    {
      id: 2,
      name: "Los Angeles",
      country: "US",
      lat: 34.052235,
      lng: -118.243683,
    },
    {
      id: 3,
      name: "London",
      country: "GB",
      lat: 51.507351,
      lng: -0.127758,
    },
    {
      id: 4,
      name: "Paris",
      country: "FR",
      lat: 48.856613,
      lng: 2.352222,
    },
    {
      id: 5,
      name: "Tokyo",
      country: "JP",
      lat: 35.689487,
      lng: 139.691711,
    },
    // Add more cities here
  ];

  const selectedCities: City[] = [];
  const usedIndexes: number[] = [];

  while (selectedCities.length < count) {
    const index = Math.floor(Math.random() * cities.length);
    if (!usedIndexes.includes(index)) {
      selectedCities.push(cities[index]);
      usedIndexes.push(index);
    }
  }

  return selectedCities;
};
