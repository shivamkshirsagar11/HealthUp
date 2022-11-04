import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import RegPatient from './component/Reg.Patient';
import Profile from './component/Profile';
import RegUser from './component/Reg.User';
import Patient from './component/Patient';
import Admin from './component/Admin';
import Approve from './component/Approve';
import HistoryAdmin from './component/HistoryAdmin';
function App() {
  
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
        <Login/>
        </Route>
        <Route exact path='/Healthup/register/user'>
        <RegUser/>
        </Route>
        <Route exact path='/Healthup/home'>
        <Home/>
        </Route>
        <Route exact path='/Healthup/admin'>
        <Admin/>
        </Route>
        <Route exact path='/Healthup/register/patient'>
        <RegPatient/>
        </Route>
        <Route exact path='/Healthup/show/patient'>
        <Patient/>
        </Route>
        <Route exact path='/Healthup/user/profile'>
        <Profile/>
        </Route>
        <Route exact path='/Healthup/admin/appointments/approve'>
        <Approve/>
        </Route>
        <Route exact path='/Healthup/admin/appointments/approved/history'>
        <HistoryAdmin/>
        </Route>
        <Route exact path='/Healthup/user/appointments/history'>
        <HistoryAdmin/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
