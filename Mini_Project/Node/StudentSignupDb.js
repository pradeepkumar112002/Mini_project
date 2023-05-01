const mongoose = require("mongoose");
const StudentDetailSchema = new mongoose.Schema(
    {
        userName : {type:String, unique:true},
        passWord : String,
        regNo : Number,
        classCouns : String,
        classSection : String,
        totalLeave: Number,
    },
    {
        collection:"MiniProject"
    }

);
mongoose.model("MiniProject",StudentDetailSchema);