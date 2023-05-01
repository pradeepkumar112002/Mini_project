import "../Styles/TeacherView.css"
import { useEffect, useState } from "react";
import ValidationTextFields from "./Reason";


function BasicTable() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/getAllUser",{
           method:"GET"

        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data,"userData")
            setData(data.data);
        })

        },[]);
    
    
    return (
    
    <>
        <div className="main-4">
        <div className="main-tab">
        <table >
            <tr>
                <td>Name</td>
                <td>Register Number</td>
                <td>Class Counsellor's Name</td>
                <td>Section</td>
                <td>Total Number of Holidays Left</td>
            </tr>
            {data.map(i=>{
                return (
                    <tr>
                        <td>{i.userName}</td>
                        <td>{i.regNo}</td>
                        <td>{i.classCouns}</td>
                        <td>{i.classSection}</td>
                        <td>{i.totalLeave}</td>
                    </tr>
                )
            })}
        </table>
        </div>
        </div>
    </>)
}


export default BasicTable;