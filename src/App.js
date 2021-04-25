import './App.css';
import Navber from './component/Navber/Navber';
import Home from './component/Home/Home';
import Login from './component/Login/Login';


import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';
import Destination from './component/Destination/Destination';
import Booking from './component/Booking/Booking';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

  export const userContext = createContext()


function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (

    <userContext.Provider value ={[loggedInUser,setLoggedInUser]}>
     <Navber />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/destination/:id">
            <Destination/>
          </Route> 
          <PrivateRoute path="/booking/:id">
            <Booking/>
          </PrivateRoute> 
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
