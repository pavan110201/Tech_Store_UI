import DialogContent from '@mui/material/DialogContent';
import { Laptop } from '../types';
type DialogFormProps = {
  laptop: Laptop;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// MUI Button
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
function LaptopDialogContent({ laptop, handleChange }: DialogFormProps) {
  return (
    <>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField label="Brand" name="brand"
          value={laptop.brand} onChange={handleChange}/>
          <TextField label="Model" name="model"
          value={laptop.model} onChange={handleChange}/>
          <TextField label="Color" name="color"
          value={laptop.color} onChange={handleChange}/>
          <TextField label="Year" name="modelYear"
          value={laptop.modelYear} onChange={handleChange}/>
          <TextField label="Serial Number" name="serialNumber"
          value={laptop.serialNumber} onChange={handleChange}/>
          <TextField label="Price" name="price"
          value={laptop.price} onChange={handleChange}/>
        </Stack>     
      </DialogContent>  
    </>
  );
}
export default LaptopDialogContent;
