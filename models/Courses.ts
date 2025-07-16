import mongoose, { Schema, models } from "mongoose";

const courseSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  thumbnail: { type: String },
  price: { type: Number, default: 0 }, // 0 = free
  isPublished: { type: Boolean, default: false },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

const Course = models.Course || mongoose.model("Course", courseSchema);
export default Course;
