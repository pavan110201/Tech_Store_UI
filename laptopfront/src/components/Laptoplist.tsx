import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getLaptops, deleteLaptop } from '../api/laptopapi';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddLaptop from './AddLaptop';
import EditLaptop from './EditLaptop';
type LaptoplistProps = { logOut?: () => void;}
function Laptoplist({ logOut }: LaptoplistProps) 
{
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const { data, isError, isLoading, isSuccess } = useQuery({ queryKey: ["laptops"], queryFn: getLaptops});
  const { mutate } = useMutation(deleteLaptop, { onSuccess: () => { setOpen(true);
      queryClient.invalidateQueries({ queryKey: ['laptops'] });}, onError: (err) => { console.error(err);},}); 
  const columns: GridColDef[] = [
    {field: 'brand', headerName: 'Brand', width: 200},
    {field: 'model', headerName: 'Model', width: 200},
    {field: 'color', headerName: 'Color', width: 200},
    {field: 'serialNumber', headerName: 'Reg.nr.', width: 150},
    {field: 'modelYear', headerName: 'Model Year', width: 150},
    {field: 'price', headerName: 'Price', width: 150},
    {
      field: 'edit',
      headerName: '',
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) =>
        <EditLaptop laptopData={params.row} />
    },
    {
      field: 'delete',
      headerName: '',
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <IconButton aria-label="delete" size="small"
          onClick={() => {
            if (window.confirm(`Are you sure you want to delete ${params.row.brand} ${params.row.model}?`)) {
              mutate(params.row._links.laptop.href);
            } 
          }}       
        >
        <DeleteIcon fontSize="small" />
        </IconButton>
      ),
    },
  ]; 
  if (isLoading) 
  {
    return <span>Loading...</span>
  }
  else if (isError) 
  {
    return <span>Error when fetching laptops...</span>
  }
   else if (isSuccess) 
  {
    return (
      <>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <AddLaptop />
          <Button onClick={logOut}>Log out</Button>
        </Stack>
        <DataGrid
          rows={data}
          columns={columns}
          disableRowSelectionOnClick={true}
          getRowId={row => row._links.self.href}
          showToolbar={true}
        />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Laptop deleted" />
        </>
    );
  }
}
export default Laptoplist;