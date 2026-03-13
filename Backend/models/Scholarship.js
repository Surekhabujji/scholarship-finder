import mongoose from "mongoose";

const scholarshipSchema = new mongoose.Schema({
  title: String,
  provider: String,
  amount: Number,
  deadline: String,
  category: String
});

const Scholarship = mongoose.model("Scholarship", scholarshipSchema);

export default Scholarship;