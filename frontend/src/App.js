import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';


import RegisterPage from './pages/auth/RegisterPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import AlertNotification from './components/shared/AlertNotification';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <RegisterPage />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route >
            <Redirect to="/dashboard" />
          </Route>

        </Switch>
      </BrowserRouter>
      <AlertNotification />
    </>

  );
}

export default App;
