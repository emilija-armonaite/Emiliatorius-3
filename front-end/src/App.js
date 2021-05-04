
import './App.css';
import Login from "./components/login/Login"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './components/home/Home';
import ProtectedRoute from "./components/Routes/ProtectedRoute"
import password from "./components/login/password"

function App() {
  return (
    
    <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <ProtectedRoute path='/home' component={Home} />
                <Route exact path='/password' component={password} />
            </Switch>
        </Router>
  );
}

export default App;
