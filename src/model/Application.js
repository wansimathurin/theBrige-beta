import mongoose, { Schema } from "mongoose";

const ApplicationSchema = new Schema({
 name: { type: String, required: true },
 email: { type: String, required: true },
 phone: { type: String, required: true },
 socialMediaProfile: { type: String, required: true },
 message:{ type: String, required: true },
 campaignId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "Campaign",
  required: true
 },
 ApplicantId:{
     type: String,
     required: true
 }
}, { timestamps: true });

// 🔥 FIX: use proper casing
export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);