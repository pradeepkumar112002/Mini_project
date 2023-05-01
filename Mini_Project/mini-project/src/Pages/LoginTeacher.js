import "../Styles/LoginTeacher.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function TeacherLogin(){

    const [userNameT,setUserNameT]=useState("");
    const handleUserNameChange = (event)=>{setUserNameT(event.target.value)};
    const[passWordT,setPassWordT]= useState("");
    const handlePassWordChange = (event)=>{setPassWordT(event.target.value)};

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(userNameT,passWordT)
        fetch("http://localhost:8000/loginT",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",

            },
            body:JSON.stringify({
                userNameT,
                passWordT
            }),

        }).then((res)=>res.json())
          .then((data)=>{
            console.log(data,"TeacherSignupDb");
            if(data.status=="ok"){
                alert("login Successful");
                window.localStorage.setItem("tokenT",data.data);
                window.location.href="./TeacherTable"
            }
            else{
                alert("Login failed, Try Again");
            }
          })
    }
    return(
        <>
        <div className="main3">
            
            <div className="main-form3">
                <h1>Teacher Login</h1>
                <div className="main-form3-sub1">
                <input type="text" placeholder="Username" id="userName" value={userNameT} onChange={handleUserNameChange}/>
                </div>
                <div className="main-form3-sub2">
                <input type="password" placeholder="Password" id="passWord" value={passWordT} onChange={handlePassWordChange}/>
                </div>
                <div className="main-form3-sub3">
                    
                <button id="login-student" onClick={handleLogin}>Login</button>
                
                </div>
                <h3>Don't have an accound ? <Link to={"/TeacherSignup"}><span> Sign Up </span></Link></h3>
                
            </div>
        </div>
        </>
    )
}

export default TeacherLogin;