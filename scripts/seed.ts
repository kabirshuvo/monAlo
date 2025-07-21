// scripts/seed.ts
import mongoose from "mongoose";
import Product from "../models/productModel";
import Course from "../models/courseModel";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/monalo";

async function seed() {
  await mongoose.connect(MONGODB_URI);
  await Product.deleteMany();
  await Course.deleteMany();

  await Product.insertMany([
    {
      title: "Lavender Bliss",
      description: "A calming lavender candle.",
      price: 450,
      category: "Aromatherapy",
      image: "/candles/lavender.jpg",
    },
    {
      title: "Citrus Sunrise",
      description: "Bright citrusy candle.",
      price: 380,
      category: "Citrus",
      image: "/candles/citrus.jpg",
    },
  ]);

  await Course.insertMany([
    {
      title: "Creative Drawing for Kids",
      description: "Unlock creativity with drawing.",
      image: "/courses/drawing-course.jpg",
      lessons: [
        { id: "1", title: "Lines and Shapes", content: "Let's draw shapes." },
        { id: "2", title: "Animals", content: "Cats and birds." },
      ],
    },
  ]);

  console.log("✅ Seed done");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
