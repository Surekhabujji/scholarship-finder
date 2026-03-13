import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

scholarshipId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Scholarship"
},

status:{
type:String,
default:"Pending"
}

})

export default mongoose.model("Application", applicationSchema)