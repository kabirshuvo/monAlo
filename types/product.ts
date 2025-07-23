interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'scented' | 'unscented';
}