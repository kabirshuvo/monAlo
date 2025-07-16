import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [String],
  category: { type: String },
  stock: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

const Product = models.Product || mongoose.model("Product", productSchema);
export default Product;
