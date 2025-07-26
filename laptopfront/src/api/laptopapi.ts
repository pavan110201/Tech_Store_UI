import { LaptopResponse, Laptop, LaptopEntry }  from '../types';
import axios, { AxiosRequestConfig } from 'axios';
const getAxiosConfig = (): AxiosRequestConfig => {
const token = sessionStorage.getItem("jwt");
  return { headers: { 'Authorization': token, 'Content-Type': 'application/json',},};};
export const getLaptops = async (): Promise<LaptopResponse[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/laptops`, getAxiosConfig());
  return response.data._embedded.laptops;
}
export const deleteLaptop = async (link: string): Promise<LaptopResponse> => {
  const response = await axios.delete(link, getAxiosConfig());
  return response.data
}
export const addLaptop = async (laptop: Laptop): Promise<LaptopResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/laptops`, laptop, getAxiosConfig());
  return response.data;
}
export const updateLaptop = async (laptopEntry: LaptopEntry): Promise<LaptopResponse> => {
  const response = await axios.put(laptopEntry.url, laptopEntry.laptop, getAxiosConfig());
  return response.data;
}