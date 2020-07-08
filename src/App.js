import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Home from './components/Home';

// import SignUpIn from './pages/SignUpIn'

import './App.css';
import './styles/pages.css'
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

const Temp = () => return(
  <div>
    HOME
    <Link to="/sign-up">Sign-Up</Link>
    <Link to="/sign-in">Sign-In</Link>
    <button onClick={()=>this.submit()} type="submit">SIGN UP</button>
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Temp} />
        <Route path='/sign-up' component={SignUpForm} />
        <Route path='/sign-in' component={SignInForm} />
        <Route path='/log-out' component={}/>
        <Route render={routeProps => <p>404</p>} />
      </Switch>
    </Router>
  );
}

export default App;