import mongoose, { Schema, models } from "mongoose";

const lessonSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  title: { type: String, required: true },
  videoUrl: { type: String },
  description: { type: String },
  order: { type: Number }, // Lesson ordering
  isFree: { type: Boolean, default: false }
}, { timestamps: true });

const Lesson = models.Lesson || mongoose.model("Lesson", lessonSchema);
export default Lesson;
