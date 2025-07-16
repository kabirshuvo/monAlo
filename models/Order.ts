import mongoose, { Schema, models } from "mongoose";

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  paymentMethod: { type: String }, // "bkash", "sslcommerz"
  shippingAddress: { type: String },
}, { timestamps: true });

const Order = models.Order || mongoose.model("Order", orderSchema);
export default Order;

