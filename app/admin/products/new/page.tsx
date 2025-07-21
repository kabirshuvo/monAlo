'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

const categories = [
  'scented',
  'unscented',
  'aromatic',
  'decorative',
  'therapeutic',
  'birthday',
  'religious',
  'candles'
];

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (res.ok) {
        const newProduct = await res.json();
        console.log('Product added:', newProduct);
        router.push('/shop');
      } else {
        const err = await res.text();
        throw new Error(err);
      }
    } catch (error) {
      console.error('[PRODUCT POST ERROR]', error);
      alert('Failed to add product');
    }
  };
  

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="price">Price (৳)</Label>
          <Input name="price" type="number" value={formData.price} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="image">Image Path (public folder)</Label>
          <Input name="image" value={formData.image} onChange={handleChange} required />
          <p className="text-xs text-muted-foreground">Example: <code>/products/vanilla-candle.jpg</code></p>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea name="description" value={formData.description} onChange={handleChange} rows={4} />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 mt-1 bg-background text-foreground"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat[0].toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" className="w-full mt-4">Add Product</Button>
      </form>
    </div>
  );
}
