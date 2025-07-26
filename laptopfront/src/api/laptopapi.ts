// Fetching laptops from a REST API 
import { LaptopResponse, Laptop, LaptopEntry } from '../types';
import axios from 'axios';
export const getLaptops = async (): Promise<LaptopResponse[]> =>
{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/laptops`);
    return response.data._embedded.laptops;
}
// Perform CRUD operations on laptops
export const deleteLaptop = async (link: string): Promise<LaptopResponse> => 
{
    const response = await axios.delete(link);
    return response.data;
}
export const addLaptop = async (laptop: Laptop): Promise<LaptopResponse> => 
{
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/laptops`, laptop, 
  {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
}
export const updateLaptop = async (laptopEntry: LaptopEntry): Promise<LaptopResponse> => 
{
  const response = await axios.put(laptopEntry.url, laptopEntry.laptop, {headers: {'Content-Type': 'application/json'},});
  return response.data;
}
