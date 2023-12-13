import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:5000" });

export default async function getWaifus() {
  const response = await http.get("/objects");
  return response.data;
}

// export async function getAges() {
//   const response = await http.get("ages");
//   return response.data;
// }

// export async function getPrices() {
//   const response = await http.get("prices");
//   return response.data;
// }

export async function getWaifu(id) {
  const response = await http.get(`/objects/${id}`);
  return response.data;
}

export async function getFilteredByPrice(price) {
  const response = await http.get(`/objects/price_filter?price=${price}`);
  return response.data;
}

export async function getFilteredByAge(age) {
  const response = await http.get(`/objects/age_filter?age=${age}`);
  return response.data;
}

export async function searchWaifus(query) {
  const response = await http.get(`/objects/search?query=${query}`);
  return response.data;
}