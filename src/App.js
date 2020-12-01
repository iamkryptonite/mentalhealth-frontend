import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Login/></Route>
          <Route exact path="/signup"><Signup/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
