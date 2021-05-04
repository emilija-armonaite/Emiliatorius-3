
import './App.css';
import Login from "./components/login/Login"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import ProtectedRoute from "./components/Routes/ProtectedRoute"
import password from "./components/login/password"
import TasksList from './components/Tasks/TasksList';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <ProtectedRoute path='/api/projects' component={Home} />
        <ProtectedRoute path="/api/projects/:id/tasks" component={TasksList} />
      </Switch>
    </Router>
  );
}

export default App;
