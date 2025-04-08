import mongoose, { Schema } from "mongoose";

const campaignSchema = new Schema({
  title: { type: String, required: true },
  budget: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  target: { type: String, required: false },
  slug: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  enterpriseId: { type: String, required: true }
}, { timestamps: true });

// 🔥 FIX: use proper casing
export default mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema);