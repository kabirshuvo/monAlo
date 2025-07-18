'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { fetchProducts } from '@/lib/redux/features/productSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

export default function ClientHome() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: session } = useSession();
  const { products, status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const featuredProducts = products.slice(0, 4); // Show up to 4 products

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {session ? `Welcome Back, ${session.user?.name}!` : 'Welcome to MonAlo'}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover our handcrafted candles and learn the art of candle making.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-white text-amber-600 hover:bg-gray-100">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-amber-700">
              <Link href="/learn">Learn Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Featured Candles</h2>
          {status === 'loading' && <p className="text-center">Loading products...</p>}
          {error && <p className="text-red-500 text-center">Error: {error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product: Product) => (
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
          <div className="text-center mt-8">
            <Button asChild variant="link" className="text-amber-600">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="bg-rose-50 py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Learn Candle Making</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our expert-led courses to master the art of crafting beautiful candles.
          </p>
          <Button asChild className="bg-rose-500 hover:bg-rose-600">
            <Link href="/learn">Explore Courses</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
