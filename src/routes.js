import React from "react";
import {Route} from "react-router";
import FormContainer from "./containers/FormContainer";
import Login from "./components/Login";

export default (
    <Route>
        <div>
            <Route exact path="/" component={FormContainer}/>
            <Route exact path="/login" component={Login}/>
        </div>
    </Route>
);
