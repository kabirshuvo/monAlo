'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '@/lib/redux/features/productSlice';
import { addToCart } from '@/lib/redux/features/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useParams } from 'next/navigation';
import { AppDispatch, RootState } from '@/lib/redux/store';



export default function ProductDetail() {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const id = params.id as string;
  const { selectedProduct, status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
    }
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!selectedProduct) return <p>Product not found</p>;

  return (
    <div className="container mx-auto py-12 min-h-screen bg-gray-50">
      <Card>
        <CardHeader>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-96 object-cover rounded-t-md"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl font-bold">{selectedProduct.name}</CardTitle>
          <p className="text-gray-600 mt-2">${selectedProduct.price}</p>
          <p className="text-gray-700 mt-4">{selectedProduct.description}</p>
          <Button onClick={handleAddToCart} className="mt-6 bg-amber-500 hover:bg-amber-600">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

//./app/shop/[id]/page.tsx
// 12:11  Error: 'Product' is defined but never used.  @typescript-eslint/no-unused-vars