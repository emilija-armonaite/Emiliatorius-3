import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login"
import ProtectedRoute from "./ProtectedRoute"

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <ProtectedRoute path='/projects' component={Home} />
            </Switch>
        </Router>
    );
}

export default Routes;