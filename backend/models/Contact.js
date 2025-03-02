import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  category: {
    type: String,
    enum: ["family", "friends", "work", "other"],
    default: "other",
  },
});

export default mongoose.model("Contact", contactSchema);
