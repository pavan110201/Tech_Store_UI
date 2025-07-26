// This code is part of a React component that fetches and displays a list of laptops.
/*
 import { useQuery } from '@tanstack/react-query';
import { LaptopResponse } from '../types';
import axios from 'axios';
function LaptopList() 
{
    const getLaptops = async (): Promise<LaptopResponse[]> => 
        {
            const response = await axios.get("http://localhost:8080/api/laptops");
            return response.data._embedded.laptops;
        };
    const { data, error, isSuccess } = useQuery({queryKey: ["laptops"], queryFn: getLaptops});
    if (!isSuccess) 
    {
        return <span>Loading...</span>
    }
    else if (error) 
    {
        return <span>Error when fetching cars...</span>
    }
    else 
    {
        return (
                <table>
                <tbody>
                    { 
                        data.map((laptop: LaptopResponse) =>
                        <tr key={laptop._links.self.href}>
                        <td>{laptop.brand}</td>
                        <td>{laptop.model}</td>
                        <td>{laptop.color}</td>
                        <td>{laptop.serialNumber}</td>
                        <td>{laptop.modelYear}</td>
                        <td>{laptop.price}</td>
                        </tr>)
                    }
                </tbody>
                </table>
            );
}
}
export default LaptopList;
*/
import { useQuery } from '@tanstack/react-query';
import { getLaptops } from '../api/laptopapi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
function LaptopList() 
{
  const { data, error, isSuccess } = useQuery({
    queryKey: ["laptops"],
    queryFn: getLaptops
  });

  const columns: GridColDef[] = [
    { field: 'brand', headerName: 'Brand', width: 200 },
    { field: 'model', headerName: 'Model', width: 200 },
    { field: 'color', headerName: 'Color', width: 200 },
    { field: 'serialNumber', headerName: 'Serial Number', width: 150 },
    { field: 'modelYear', headerName: 'Model Year', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
  ];

  if (!isSuccess) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span>Error when fetching laptops...</span>;
  } else {
    return (
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={row => row._links.self.href}
        />
      </div>
    );
  }
}
export default LaptopList;
