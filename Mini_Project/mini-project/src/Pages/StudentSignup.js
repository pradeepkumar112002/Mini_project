import "../Styles/StudentSignup.css"
import { useState } from "react";

function StudentSignup(){
    const[userName,setUserName] = useState("");
    const handleUserNameChange = (event)=>{setUserName(event.target.value)};
    const[passWord,setPassWord]= useState("");
    const handlePassWordChange = (event)=>{setPassWord(event.target.value)};
    // const[confirmPass,setConfirmPass]=useState("");
    // const handleConfirmPassChange = (event)=>{setConfirmPass(event.target.value)};
    const[regNo,setRegNo]=useState("");
    const handleRegNoChange = (event)=>{setRegNo(event.target.value)};
    const[classCouns,setClassCouns]=useState("");
    const handleclassCounsChange = (event)=>{setClassCouns(event.target.value)}
    const[classSection,setClassSection]=useState("");
    const handleClassSectionChange = (event)=>{setClassSection(event.target.value);};
    const[totalLeave,setTotalLeave]=useState("");
    const handleTotalLeaveChange = (event)=>{setTotalLeave(event.target.value)};
    const handleSubmit=(e)=>{
        e.preventDefault();
        const items = {userName,passWord,regNo,classCouns,classSection,totalLeave};
        console.log(userName,passWord,regNo,classCouns,classSection,totalLeave);  
        fetch("http://localhost:8000/StudentSignup",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",

            },
            body:JSON.stringify({
                userName,
                passWord,
                regNo,
                classCouns,
                classSection,
                totalLeave
            }),

        }).then((res)=>res.json())
          .then((data)=>{
            console.log(data,"StudentSignupDb");
          })
    }
    return(
        
        <>
            
            <form onSubmit={handleSubmit}>
        <div className="main7">
            <center><h1>Attendance Manager</h1></center>
            <div className="main7-form">
                <h1>Student Signup</h1>
                <div className="main7-form-sub1">
                <label>Enter your username</label>
                <input type="text" placeholder="Username" id="userName" value={userName} onChange={handleUserNameChange}/>
                </div>
                <div className="main7-form-sub2">
                <label>Enter you password</label>
                <input type="password" placeholder="Password" id="passWord" value={passWord} onChange={handlePassWordChange}/>
                </div>
                <div className="main7-form-sub4">
                {/* <label>Confirm Password</label>
                <input type="password" placeholder="Password" id="confirm" value={confirmPass} onChange={handleConfirmPassChange}/> */}
                </div>
                <div className="main7-form-sub5">
                    <label>Enter your Register Number</label>
                    <input type="text" placeholder="Register Number" id="regno" value={regNo} onChange={handleRegNoChange}/>
                </div>
                <div className="main7-form-sub3">
                    <label>Who is your class counsellor</label>
                    <input type="text" placeholder="Counsellor" id="classCouns" value={classCouns} onChange={handleclassCounsChange}/>
                </div>
                <div className='main7-form-sub3'>
                    <label>Enter you class Section </label>
                    <input type="text" placeholder="section" id="section" value={classSection} onChange={handleClassSectionChange}/>
                    
                </div>
                {/* <div className='main-form-sub3'>
                    <label>Please Enter 6 below</label>
                    <input type="text" placeholder="6" id="six" value={totalLeave} onChange={handleTotalLeaveChange}/>
                </div> */}
                <div className="main7-form-sub6">
                    <button onClick={handleSubmit}>Signup</button>
                </div>

                
                
            </div>
        </div>
        </form>
        
        </>
    )
}
export default StudentSignup;