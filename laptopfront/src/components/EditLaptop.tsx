import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import LaptopDialogContent from './LaptopDialogContent';
import { Laptop, LaptopResponse, LaptopEntry } from '../types';
import { updateLaptop } from '../api/laptopapi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
// MUI Button
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
type FormProps = {
  laptopData: LaptopResponse;
}
function EditLaptop({ laptopData }: FormProps) {
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const url = laptopData._links.self.href;
    const laptopEntry: LaptopEntry = { laptop, url };
    mutate(laptopEntry);
    setLaptop({ brand: '', model: '', color: '', serialNumber: '', modelYear: 0, price: 0 });    
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLaptop({ ...laptop, [event.target.name]: event.target.value });
  };
 return(
    <>
      <Tooltip title="Edit laptop">
        <IconButton aria-label="edit" size="small" onClick={handleClickOpen}>
          <EditIcon fontSize= "small" />
        </IconButton>      
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit laptop</DialogTitle>
        <LaptopDialogContent laptop={laptop} handleChange={handleChange}/>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>    
    </>
  );
}
export default EditLaptop;
