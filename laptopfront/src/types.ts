export type LaptopResponse = 
{
  brand: string;
  model: string;
  color: string;
  serialNumber: string;
  modelYear: number;
  price: number;
  _links: 
  {
      self: 
      {
        href: string;
      },
      Laptop: 
      {
        href: string;
      },
      owner: 
      {
        href: string;
      }
  };
}
export type Laptop = 
{
brand: string;
model: string;
color: string;
serialNumber: string;
modelYear: number;
price: number;
}
export type LaptopEntry = 
{
laptop: Laptop;
url: string;
}
