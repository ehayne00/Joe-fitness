import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Home from './Components/Home'
import Services from './Components/Services'
import AboutMe from './Components/AboutMe'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Booking from './Components/Booking'
import Profile from './Components/Profile'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/' render={Home} />
      <Route exact path='/About' render={AboutMe} />
      <Route exact path='/services' render={Services} />
      <Route exact path='/testimonials' render={Testimonials} /> 
      <Route exact path='/contact' render={Contact} />
      <Route exact path='/login' render={Login} />
      <Route exact path='/profile' render={Profile} />
      <Route exact path='/booking' render={Booking} />

      </Switch>
    </div>
  );
}

export default App;
