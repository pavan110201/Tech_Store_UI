import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addLaptop } from '../api/laptopapi';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import LaptopDialogContent from './LaptopDialogContent';
import { Laptop } from '../types';
// MUI Button
import Button from '@mui/material/Button';
function AddLaptop() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [laptop, setLaptop] = useState<Laptop>({
    brand: '',
    model: '',
    color: '',
    serialNumber: '',
    modelYear: 0,
    price: 0
  });
  const { mutate } = useMutation(addLaptop, {
    onSuccess: () => {
      queryClient.invalidateQueries(["laptops"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLaptop({ ...laptop, [event.target.name]: event.target.value });
  }

  const handleSave = () => {
    mutate(laptop);
    setLaptop({ brand: '', model: '', color: '', serialNumber: '', modelYear: 0, price: 0 });
    handleClose();
  }
return(
    <>
      <Button onClick={handleClickOpen}>New Laptop</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New laptop</DialogTitle>
          <LaptopDialogContent laptop={laptop} handleChange={handleChange} />
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default AddLaptop;
