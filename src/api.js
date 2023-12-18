import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:5000" });

export default async function getKuns() {
  const response = await http.get("/objects");
  return response.data;
}

export async function getAges() {
  const response = await http.get("/ages");
  return response.data;
}

export async function getPrices() {
  const response = await http.get("/prices");
  return response.data;
}

export async function getKun(id) {
  const response = await http.get(`/objects/?filterBy=id&value=${id}`);
  return response.data[0];
}

export async function getFilteredByPrice(price) {
  const response = await http.get(`/objects/?filterBy=price&value=${price}`);
  return response.data;
}

export async function getFilteredByAge(age) {
  const response = await http.get(`/objects/?filterBy=age&value=${age}`);
  return response.data;
}

export async function searchKuns(query) {
  const response = await http.get(`/objects/?filterBy=search&value=${query}`);
  return response.data;
}