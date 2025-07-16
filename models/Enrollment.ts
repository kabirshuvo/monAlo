import mongoose, { Schema, models } from "mongoose";

const enrollmentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  progress: [
    {
      lessonId: { type: Schema.Types.ObjectId, ref: "Lesson" },
      completed: { type: Boolean, default: false },
    }
  ]
}, { timestamps: true });

const Enrollment = models.Enrollment || mongoose.model("Enrollment", enrollmentSchema);
export default Enrollment;
