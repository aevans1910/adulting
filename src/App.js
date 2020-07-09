import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom'
import './App.css';
import './styles/pages.css'
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Cookies from 'js-cookie'

const Temp = () => {

  // const [state, setState] = useState({token: "sdsds"})

  const token = Cookies.get('token')
  // useEffect(() => {
  //   setState({token: token})
  //   console.log(state)
  // }, [])

  const history = useHistory()
  return(
  <div>
    navbar
    {token === undefined ? 
    <>
      <Link to="/sign-up">Sign-Up</Link>
      <Link to="/sign-in">Sign-In</Link> 
    </> :
      <button onClick={() => { 
        Cookies.remove('token') 
        // history.push('/') 
        window.location.replace("/")
      }}>Log Out</button>
    }
  </div>
  )
};

function App() {
  return (
    <Router>
        <Temp />
        <Route path='/sign-up' component={SignUpForm} />
        <Route path='/sign-in' component={SignInForm} />
        <Route render={routeProps => <p>404</p>} />
    </Router>
  );
}

export default App;