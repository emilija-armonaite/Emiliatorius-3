import { Switch } from 'react-router';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Login} /> 
        <Route exact path="/api/projects" component={Home} />
       </Switch>
    </div>
  );
}

export default App;
