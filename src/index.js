import React from 'react';
import ReactDOM from 'react-dom';
// import indexRoutes from './routes/index.jsx';
import {  BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

import './assets/scss/style.css';
import SignInSide from './login/Login.jsx';



ReactDOM.render(
  <HashRouter>

    {/* <SignInSide /> */}
    
  
    <Switch>
      {/*{indexRoutes.map((prop, key) => {*/}
      {/*  return <Route path={prop.path} key={key} component={prop.component} />;*/}
      {/*})}*/}
        <Route path="/login">
            <Login />
        </Route>
        <ProtectedRoute path="/dashboard">
            <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
            <Redirect exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
            <Redirect from="/" to="dashboard" />
        </Route>
    </Switch>
  
  </HashRouter>
  ,document.getElementById('root')); 
