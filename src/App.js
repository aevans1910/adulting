import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';

import SignUpIn from './pages/SignUpIn'

import './App.css';
import './styles/pages.css'
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/sign-up' component={SignUpIn} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;

{/* <div className="App">
          <SignUpIn />
        </div> */}