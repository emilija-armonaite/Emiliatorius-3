import { Switch } from 'react-router';
import './App.css';
import Home from './components/Home';
import Login from './components/Login.js';
import { BrowserRouter as Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Login />
      {/* <Switch>
        <Route exact path="/" component={Login} /> 
        <Route exact path="/home" component={Home}/>
       </Switch> */}
    </div>
  );
}

export default App;
