import { LaptopResponse }  from '../types';
import axios from 'axios';
export const getLaptops = async (): Promise<LaptopResponse[]> =>
{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/laptops`);
    return response.data._embedded.laptops;
}