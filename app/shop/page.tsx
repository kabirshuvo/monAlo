'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/lib/redux/features/productSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { AppDispatch, RootState } from '@/lib/redux/store';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'scented' | 'unscented';
}

export default function Shop() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector((state: RootState) => state.products);
  const [category, setCategory] = useState<string>('all');
  const [sort, setSort] = useState<string>('default');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = products
    .filter((product: Product) => category === 'all' || product.category === category)
    .sort((a: Product, b: Product) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto py-12 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Shop Our Candles</h2>
      <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
        <Select onValueChange={setCategory} defaultValue="all">
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="scented">Scented</SelectItem>
            <SelectItem value="unscented">Unscented</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setSort} defaultValue="default">
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {status === 'loading' && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product: Product) => (
          <Card key={product._id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
              <p className="text-gray-600">${product.price}</p>
              <Link href={`/shop/${product._id}`}>
                <Button variant="outline" className="mt-4 w-full">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
