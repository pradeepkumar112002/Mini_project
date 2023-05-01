const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const mongourl = "mongodb+srv://pradeepk:ppks1234@cluster0.ix8askm.mongodb.net/?retryWrites=true&w=majority"
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
app.use(cors());
const JWT_SECRET ="hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl ="mongodb+srv://adarsh:adarsh@cluster0.zllye.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e));

require("./TeacherSignupDb");
const Teacher = mongoose.model("MiniProjectTeach");
app.post("/TeacherSignup",async(req,res)=>{
  const  {userNameT , passWordT , regNoT , classSectionT} =req.body;
  const encryptedPassword = await bcrypt.hash(passWordT, 10);
  try{
      const oldUserT = await Teacher.findOne({userNameT});
      if(oldUserT){
          return res.send({error:"User Exist"})
        }
       await Teacher.create({
         userNameT,
          passWordT : encryptedPassword,
          regNoT,
          classSectionT
  });
  res.send({status:"ok"});
}
catch(error){
  res.send({status:"error"})
  }
})

require("./StudentSignupDb");
const Student = mongoose.model("MiniProject");
app.post("/StudentSignup",async(req,res)=>{
  const  {userName , passWord , classCouns, regNo , classSection,totalLeave} =req.body;
  const encryptedPassword = await bcrypt.hash(passWord, 10);
  try{
        const oldUser = await Student.findOne({userName});
        if(oldUser){
            return res.send({error:"User Exist"})
        }
         await Student.create({
            userName,
            passWord : encryptedPassword,
            classCouns,
            regNo,
            classSection,
            totalLeave:6
    });
    res.send({status:"ok"});
    }
    catch(error){
        res.send({status:"error"})
    }
})

app.post("/loginT", async (req, res) => {
  const { userNameT, passWordT } = req.body;

  const userT = await Teacher.findOne({ userNameT });
  if (!userT) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(passWordT, userT.passWordT)) {
      const tokenT = jwt.sign({ userNameT: userT.userNameT }, JWT_SECRET, {
          expiresIn: "15m",
      });
      
      if (res.status(201)) {
          return res.json({ status: "ok", data: tokenT });
      } else {
          return res.json({ error: "error" });
      }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});






app.post("/login", async (req, res) => {
    const { userName, passWord } = req.body;
  
    const user = await Student.findOne({ userName });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(passWord, user.passWord)) {
        const token = jwt.sign({ userName: user.userName }, JWT_SECRET, {
            expiresIn: "15m",
        });
        
        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });

  app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const userName = user.userName;
      Student.findOne({ userName: userName })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) { }
  });

  app.post("/Leave",async(req,res)=>{
    const {username} = req.body.userName;
    const {totalleave} = req.body.totalLeave;
    try{
      let student =  await Student.findOne({userName:req.body.userName})
      student.totalLeave = req.body.totalLeave;
      student.save();
      console.log(student);
      
    }
    catch(error){console.log(error)}

  })

  app.get("/getAllUser", async (req, res) => {
    try {
      const allUser = await Student.find({});
      res.send({ status: "ok", data: allUser });
    } catch (error) {
      console.log(error);
    }
  });



app.listen(8000,()=>{
    console.log("Server Started");
});
