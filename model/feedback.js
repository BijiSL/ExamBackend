const mongoose=require('mongoose');
const feedbackschema=new mongoose.Schema({
    CourseID:String,
     CourseName:String,
      CourseDuration:String,
       OverallFeedback:String
});
module.exports=mongoose.model("Feedback",feedbackschema);
