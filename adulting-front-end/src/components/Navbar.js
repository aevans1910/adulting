import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom'

import Cookies from 'js-cookie'

import "../styles/navbar.css"

export default function Navbar() {

    // const [state, setState] = useState({token: "sdsds"})
  
    const token = Cookies.get('token')
    // useEffect(() => {
    //   setState({token: token})
    //   console.log(state)
    // }, [])
    const [redirect, updateRedirect] = useState(false)
    const history = useHistory()
    return(
    <div className="authentication">
        {token === undefined ? 
        <>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/sign-in">Sign In</Link> 
        </> :
            <button onClick={() => { 
            Cookies.remove('token') 
    
            // history.push('/') 
            // window.location.replace("/")
            updateRedirect(true)
    
            }}>Log Out</button>
        }
        {redirect && <Redirect to="/"/>}
    </div>
    )
};
