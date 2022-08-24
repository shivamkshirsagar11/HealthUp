import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import { useState } from 'react';
function App() {
  const [isValidUser,setValidation] = useState(true);
  const validity = ()=>{
    if (isValidUser) {return (<Home/>);}
    else{return(<Login ustate_fn = {setValidation}/>);}
  }
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login ustate_fn = {setValidation}/>
        </Route>
        <Route path='/Healthup/home'>
        {validity}
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
