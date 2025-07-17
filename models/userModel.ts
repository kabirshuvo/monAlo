// import mongoose, { Schema, models } from "mongoose";

// const userSchema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: {
//     type: String,
//     enum: ["guest", "customer", "learner", "admin"],
//     default: "customer",
//   }
// }, { timestamps: true });

// const User = models.User || mongoose.model("User", userSchema);
// export default User;



import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
