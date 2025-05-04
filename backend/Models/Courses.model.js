import mongoose from "mongoose";
const CourseSchema=new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    cost:{
        type:Number,
        requried:true
    },
    provider:{
        type:String,
        requried:true
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        requried:true
    }
},{timestamps:true})

const course=mongoose.model('course',CourseSchema)
export default course;
