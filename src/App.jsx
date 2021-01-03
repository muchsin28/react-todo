import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProvideAuth from './components/ProvideAuth'
import { Container } from 'react-bootstrap'



function App() {

  return (
      
    <>
      <ProvideAuth>
        <Router>
        
        <Container fluid >
          <Switch>
            <Route exact path="/">
              <MainPage logo={logo}/>
            </Route>

            <Route exact path="/login">
              <LoginPage logo={logo} />
            </Route>

            <Route exact path="/register">
              <RegisterPage logo={logo}/>
            </Route>


          </Switch>
        </Container >

      </Router>
    </ProvideAuth>
    </>
  );
}

export default App;
