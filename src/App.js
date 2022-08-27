import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import RegAppointment from './component/Reg.Appointment';
import RegPatient from './component/Reg.Patient';
import Profile from './component/Profile';
import RegUser from './component/Reg.User';
import {useState} from "react";
function App() {
  const [docs,setDocs] = useState();
  function oneTime(){
    fetch(`http://localhost:8080/api/doctor/get/giveall`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(async (res)=>{
        return await res.json();
      })
      .then((docs)=>{
        setDocs(docs);
      })
  };
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
        {oneTime()}
        <Login/>
        </Route>
        <Route exact path='/Healthup/register/user'>
        <RegUser/>
        </Route>
        <Route path='/Healthup/home'>
        <Home/>
        </Route>
        <Route path='/Healthup/register/appointment'>
        <RegAppointment docObj = {docs}/>
        </Route>
        <Route path='/Healthup/register/patient'>
        <RegPatient/>
        </Route>
        <Route path='/Healthup/user/profile'>
        <Profile/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
