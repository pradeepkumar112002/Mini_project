import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import   "../Styles/Reason.css"
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function ValidationTextFields(props) {
  // useEffect(()=>{
    const[userName,setUserName]=useState("");
    let[leaveLeft,setLeaveLeft]= useState(0);
    let[totalLeave,setTotalLeave] = useState(0);
    
    useEffect(()=>{
        fetch("http://localhost:8000/userData",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            token:localStorage.getItem("token"),
          }),
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data,"userData");
          setUserName(data.data.userName);
          setTotalLeave(data.data.totalLeave);
        });
      
    }, []);
  const name = userName[0];
  console.log("UserName is "+name);
  const [from,setFrom] = useState("");
  const [to,setTo] = useState("");
  const [classCouns,setClassCouns] = useState(""); 
  const handleclassCounsChange = (event)=>{setClassCouns(event.target.value)}
  const [diffDays,setDiffDays] = useState("");
  const handleDiffDaysChange = (event)=>{setDiffDays(event.target.value)};
  const [result,setResult] = useState("");
  const handleFromChange = (event) =>  {setFrom(event.target.value)}
  const handleToChange = (event) =>  {setTo(event.target.value)}
  const handleFrom = () => {
    console.log({from})
  }
  const handleTo = () => {
    console.log({to})
  }
  
  const handleDateSubtraction = (e) => {
    const date1Obj = new Date(from);
    const date2Obj = new Date(to);
    const diffTime = date2Obj.getTime() - date1Obj.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //Number of days the person took off
    setDiffDays(diffDays);
    setTotalLeave(totalLeave = totalLeave-diffDays);
    setLeaveLeft(leaveLeft = 6-totalLeave);
    console.log(`The difference between ${from} and ${to} is ${diffDays} days.`)
    setResult(`The difference between ${from} and ${to} is ${diffDays} days.`);
  };
  function message(){
    handleDateSubtraction();
    console.log("The remaining Leave for "+ userName+ " is : "+totalLeave);
    axios.post("http://localhost:8000/Leave",{
      userName: userName,
      totalLeave: totalLeave
    })
    .then(res=>{
      console.log(res.data); 
    })
    alert("Total number Of Leave you took is "+leaveLeft);
    return (alert("Your form has been succcessfully submited"));


  }
  return (
    <div className='mainR'>
    <div className='mainR-box1'>
    <h1>Welcome {userName}</h1>
    <div className='mainR-dropdown'>
    <h3>Select your Reason for <br/>applying Leave  </h3>
    <select>
      <option>
        Medical Leave
      </option>
      <option>
        Personal Leave
      </option>
      <option>
      Privilege Leave
      </option>
    </select>
    </div>
    <h3>Which section are you ?</h3>
    <div className='mainR-dropdown-2'>
    <select>
      <option>
        IT-A
      </option>
      <option>
        IT-B
      </option>
    </select>
    </div>
    <div className='mainR-date-from-to'>
    <h3>Leave from :</h3>
    <input type="date" id="fromDate" name="fromDate" value={from} onChange={handleFromChange}  /> {/* Date 1*/}
    <button onClick={handleFrom}>Yes</button>
    <h3>To</h3>
    <input type="date" id="toDate" name="toDate" value={to} onChange={handleToChange} /> {/* Date 2 */}
    <button onClick={handleTo}>Yes</button>
    </div>
    <div className='mainR-submit'>
    <button onClick={message}>Submit</button>
    </div>
    
    </div>
    </div>
  );
}
