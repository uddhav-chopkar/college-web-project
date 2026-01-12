import mongoose, { Mongoose } from "mongoose";

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    Default:Date.now()
  }
});

const enquiryModel = mongoose.model("enquiries", enquirySchema);
export default enquiryModel
