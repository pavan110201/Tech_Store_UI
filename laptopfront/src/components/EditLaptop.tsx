import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import LaptopDialogContent from './LaptopDialogContent';
import { Laptop, LaptopResponse, LaptopEntry } from '../types';
import { updateLaptop } from '../api/laptopapi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
type FormProps = 
{
  laptopData: LaptopResponse;
}
function EditLaptop({ laptopData }: FormProps) 
{
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [laptop, setLaptop] = useState<Laptop>
  ({
    brand: '',
    model: '',
    color: '',
    serialNumber: '',
    modelYear: 0,
    price: 0
  });
  const { mutate } = useMutation(updateLaptop, {
    onSuccess: () => {
      queryClient.invalidateQueries(["laptops"]);
    },
    onError: (err) => {
      console.error(err);
    }
  });
  const handleClickOpen = () => {
    setOpen(true);
    setLaptop({
      brand: laptopData.brand,
      model: laptopData.model,
      color: laptopData.color,
      serialNumber: laptopData.serialNumber,
      modelYear: laptopData.modelYear,
      price: laptopData.price
    });
  };
  const handleClose = () => 
  {
    setOpen(false);
  };
  const handleSave = () => 
  {
    const url = laptopData._links.self.href;
    const laptopEntry: LaptopEntry = { laptop, url };
    mutate(laptopEntry);
    setLaptop({ brand: '', model: '', color: '', serialNumber: '', modelYear: 0, price: 0 });    
    setOpen(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
  {
    setLaptop({ ...laptop, [event.target.name]: event.target.value });
  };
  return (
    <>
      <button onClick={handleClickOpen}>
        Edit
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Laptop</DialogTitle>
        <LaptopDialogContent laptop={laptop} handleChange={handleChange} />
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default EditLaptop;
