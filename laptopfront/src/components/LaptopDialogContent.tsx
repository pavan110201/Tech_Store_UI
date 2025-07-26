import DialogContent from '@mui/material/DialogContent';
import { Laptop } from '../types';
type DialogFormProps = {
  laptop: Laptop;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function LaptopDialogContent({ laptop, handleChange }: DialogFormProps) {
  return (
    <>
      <DialogContent>
        <input placeholder="Brand" name="brand"
          value={laptop.brand} onChange={handleChange}/><br/>
        <input placeholder="Model" name="model"
          value={laptop.model} onChange={handleChange}/><br/>
        <input placeholder="Color" name="color"
          value={laptop.color} onChange={handleChange}/><br/>
        <input placeholder="Year" name="modelYear"
          value={laptop.modelYear} onChange={handleChange}/><br/>
        <input placeholder="Serial Number" name="serialNumber"
          value={laptop.serialNumber} onChange={handleChange}/><br/>
        <input placeholder="Price" name="price"
          value={laptop.price} onChange={handleChange}/><br/>
      </DialogContent>  
    </>
  );
}
export default LaptopDialogContent;
