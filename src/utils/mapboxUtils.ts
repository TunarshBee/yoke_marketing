import { City } from "../types/City";

export const cities: City[] = [
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
  {
    id: 6,
    name: "Northampton",
    country: "USA",
    lat: 42.328674,
    lng: -70.985786,
  },
  {
    id: 7,
    name: "New Castle",
    country: "USA",
    lat: 39.668564,
    lng: -75.586189,
  },
  {
    id: 8,
    name: "Northampton",
    country: "USA",
    lat: 42.328674,
    lng: -70.985786,
  },
  {
    id: 9,
    name: "Torrington",
    country: "USA",
    lat: 41.806595,
    lng: -73.130592,
  },
  {
    id: 10,
    name: "Lagos",
    lat: 6.45,
    lng: 3.4,
    country: "Nigeria",
  },
  {
    id: 11,
    name: "Ibadan",
    lat: 7.3964,
    lng: 3.9167,
    country: "Nigeria",
  },
  {
    id: 12,
    name: "Owerri",
    lat: 5.4833,
    lng: 7.0333,
    country: "Nigeria",
  },
  {
    id: 13,
    name: "Onitsha",
    lat: 6.1667,
    lng: 6.7833,
    country: "Nigeria",
  },
  {
    id: 14,
    name: "Maiduguri",
    lat: 11.8333,
    lng: 13.1500,
    country: "Nigeria",
  },
  {
    id: 15,
    name: "Benin City",
    lat: 6.3176,
    lng: 5.6145,
    country: "Nigeria",
  },
  {
    id: 16,
    name: "Ogbomoso",
    lat: 8.1333,
    lng: 4.2500,
    country: "Nigeria",
  },
  {
    id: 17,
    name: "Ilorin",
    lat: 8.5000,
    lng: 4.5500,
    country: "Nigeria",
  },
  {
    id: 18,
    name: "Kaduna",
    lat: 10.5231,
    lng: 7.4403,
    country: "Nigeria",
  },
  {
    id: 19,
    name: "Oyo",
    lat: 7.8333,
    lng: 3.9333,
    country: "Nigeria",
  },
  {
    id: 20,
    name: "Saki",
    lat: 8.6676,
    lng: 3.3939,
    country: "Nigeria",
  },
  // Add more cities here
];

export const getRandomCities = (count: number, cities: City[], selectedCities: City[] = []): City[] => {


    if (count <= 0 || cities.length === 0) {
      return selectedCities;
    }

    const index = Math.floor(Math.random() * cities.length);
    const city = cities[index];

    return getRandomCities(
      count - 1,
      cities.filter((c) => c.id !== city.id),
      [...selectedCities, city]
    );

};

const selectedCities = getRandomCities(20, cities);
console.log(selectedCities);