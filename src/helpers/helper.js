import { API_KEY } from "./config";

export const getJsonFromFetch = async function (name) {
  const url = `https://api.geoapify.com/v1/geocode/search?text=${name}&format=json&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    throw e;
  }
};
