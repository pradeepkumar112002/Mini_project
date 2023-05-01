
import StudentLogin from './Pages/LoginStudent';
import { Route,Routes,Link, BrowserRouter } from 'react-router-dom';
import TeacherLogin from './Pages/LoginTeacher';
import Home from './Pages/Home';
import TeacherSignup from './Pages/TeacherSignup';
import StudentSignup from './Pages/StudentSignup';
import ValidationTextFields from './Pages/Reason';
import BasicTable from './Pages/TeacherView';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
       <Routes>
        <Route exact path={"/StudentLogin"} element={<StudentLogin />}></Route>
        <Route exact path={"/TeacherLogin"} element={<TeacherLogin />}></Route>
        <Route exact path={"/TeacherSignup"} element={<TeacherSignup />}></Route>
        <Route exact path={"/StudentSignup"} element={<StudentSignup />}></Route>
        <Route exact path={"/Reason"} element ={<ValidationTextFields/>}></Route>
        <Route exact path={"/TeacherTable"} element ={<BasicTable/>}></Route>
        
        <Route path={"*"} element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
