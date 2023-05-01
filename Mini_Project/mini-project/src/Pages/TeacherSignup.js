import "../Styles/TeacherSignup.css"
import { useState } from "react";

function TeacherSignup(){
    const [userNameT,setUserNameT]=useState("");
    const handleUserNameChange = (event)=>{setUserNameT(event.target.value)};
    const[passWordT,setPassWordT]= useState("");
    const handlePassWordChange = (event)=>{setPassWordT(event.target.value)};
    const[regNoT,setRegNoT]=useState("");
    const handleRegNoChange = (event)=>{setRegNoT(event.target.value)};
    const[classCounsT,setClassCounsT]=useState("");
    const handleclassCounsChange = (event)=>{setClassCounsT(event.target.value)}
    const[classSectionT,setClassSectionT]=useState("");
    const handleClassSectionChange = (event)=>{setClassSectionT(event.target.value);};
    const handleSubmit=(e)=>{
        e.preventDefault();
        const items = {userNameT,passWordT,regNoT,classSectionT};
        console.log(userNameT,passWordT,regNoT,classCounsT,classSectionT);  
        fetch("http://localhost:8000/TeacherSignup",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",

            },
            body:JSON.stringify({
                userNameT,
                passWordT,
                regNoT,
                classSectionT
            }),

        }).then((res)=>res.json())
          .then((data)=>{
            console.log(data,"TeacherSignupDb");
          })
    }
    return(
        <>
            <center><h1>Attendance Manager</h1></center>
        <div className="main8">
            
            <div className="main8-form">
                <h1>Teacher's Signup</h1>
                <div className="main8-form-sub1">
                <label>Enter your username</label>
                <input type="text" placeholder="Username" id="userName" value={userNameT} onChange={handleUserNameChange}/>
                </div>
                <div className="main8-form-sub2">
                <label>Enter you password</label>
                <input type="password" placeholder="Password" id="passWord" value={passWordT} onChange={handlePassWordChange}/>
                </div>
                <div className="main8-form-sub4">
                <label>Confirm Password</label>
                <input type="password" placeholder="Password" id="confirm"/>
                </div>
                <div className="main8-form-sub5">
                    <label>Enter your Register Number</label>
                    <input type="text" placeholder="Register Number" id="regno" value={regNoT} onChange={handleRegNoChange}/>
                </div>
                <div className="main8-form-sub5">
                    <label>Enter your Section </label>
                    <input type="text" placeholder="Register Number" id="regno" value={classSectionT} onChange={handleClassSectionChange}/>
                </div>
                
                <div className="main8-form-sub6">
                    <button onClick={handleSubmit}>Signup</button>
                </div>


                
                
            </div>
        </div>
        </>
    )
}


export default TeacherSignup