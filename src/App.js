import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route path='/Healthup/home'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
