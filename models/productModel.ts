// models/productModel.ts
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['scented', 'unscented'], required: true },
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);