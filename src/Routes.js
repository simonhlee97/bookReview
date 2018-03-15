import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Counter from "./components/Counter";
import Indecision from "./components/Indecision";
import Dashboard from "./components/Dashboard";



export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/counter" exact component={Counter} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/indecision" exact component={Indecision} />
    
    
    
    
    
  </Switch>;