import { Link } from "react-router-dom";
import "../Styles/Home.css"


function Home(){
    return(
        <>
        <div className="main1">
            <div className="main-student">
                <Link to={"/StudentLogin"}>
                <button id="student">Student's Login</button>
                </Link>
            </div>
            <div className="main-teacher">
                <Link to={"/TeacherLogin"}>
            <button id="teacher">Teacher's Login</button>
            </Link>
            </div>
        </div>
        </>
    )
}


export default Home;