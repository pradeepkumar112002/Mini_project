import styles from "../Styles/LoginStudent.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function StudentLogin(){
    const [userName,setUserName] = useState("");
    const handleUserNameChange=(event)=>{setUserName(event.target.value);}
    const [passWord,setPassWord] = useState("");
    const handlePassWordChange = (event)=>{setPassWord(event.target.value);}
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(userName,passWord)
        fetch("http://localhost:8000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",

            },
            body:JSON.stringify({
                userName,
                passWord
            }),

        }).then((res)=>res.json())
          .then((data)=>{
            console.log(data,"StudentSignupDb");
            if(data.status=="ok"){
                alert("login Successful");
                window.localStorage.setItem("token",data.data);
                window.location.href="./Reason"
            }
            else{
                alert("login Failed , Try again")
            }
          })
    }
    return(
        <>
        <div className="main2">
        <div className="main-heading">
        <h1>Attendance Manager</h1>
        </div>    
            <div className="main-form1">
                <h1>Student Login</h1>
                <div className="main-form1-sub1">
                <input type="text" placeholder="Username" id="userName" value={userName} onChange={handleUserNameChange}/>
                </div>
                <div className="main-form1-sub2">
                <input type="password" placeholder="Password" id="passWord" value={passWord} onChange={handlePassWordChange}/>
                </div>
                <div className="main-form1-sub3">
                    
                <button id="login-student" onClick={handleLogin}>Login</button>
                
                </div>
                <h3>Don't have an accound ? <Link to={"/StudentSignup"}><span> Sign Up </span></Link></h3>
                
            </div>
        </div>
        </>
    )
}

export default StudentLogin;