import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import Navbar from './components/Navbar'
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Home from "./pages/Home"

import './App.css';
import './styles/pages.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Route path='/' component={Home} />
        <Route path='/sign-up' component={SignUpForm} />
        <Route path='/sign-in' component={SignInForm} />
        <Route render={routeProps => <p>404</p>} />
      </div>
    </Router>
  );
}

export default App;