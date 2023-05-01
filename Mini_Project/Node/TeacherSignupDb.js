const mongoose = require("mongoose");
const TeacherDetailSchema = new mongoose.Schema(
    {
        userNameT : {type:String, unique:true},
        passWordT : String,
        regNoT : Number,
        classSectionT : String,
    },
    {
        collection:"MiniProjectTeach"
    }

);
mongoose.model("MiniProjectTeach",TeacherDetailSchema);