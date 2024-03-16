export type Billboard = {
  id: string;
  label: string;
  backgroundColor: string;
};

export type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

export type Product = {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
};

export type Size = {
  id: string;
  name: string;
  value: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};