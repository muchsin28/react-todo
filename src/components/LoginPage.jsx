import React from "react";
import {
  useHistory,

} from "react-router-dom";
import Axios from '../config/axios'
import { Row, Col } from 'react-bootstrap'


const LoginPage=(props)=>{

  let history= useHistory()
  let email;
  let password;
  const Login=(e)=>{
    e.preventDefault()
    console.log(email,password)

    Axios.post('/login',{email,password})
      .then(response => {
        console.log(response.data)
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('email', response.data.email)
        history.push('/')
      
      })
      .catch((xhr, textStatus) => {
        console.log(xhr, textStatus)
      })

  };


  

  return (
  <Row className=" App-page d-flex bg-dark text-white text-center justify-content-center align-items-center">
    <Col sm={6}>
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Col >
    <Col sm={6}>
      <form className="form-signin" id="login-form">
        <img className="rounded-circle mb-3" src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg" alt="Avatar" width="100" height="100" />
        <h3 className="h3 mb-3 font-weight-normal">Login</h3>
        {/* <label className="sr-only" htmlFor="email">Email address</label><br /> */}
        <input className="form-control" onChange={(e)=> email = e.target.value} type="email" id="email" placeholder="Email address" required autoFocus />
        <br />
        {/* <label className="sr-only" htmlFor="password">Password</label><br /> */}
        <input className="form-control" onChange={(e)=> password = e.target.value} type="password" id="password" placeholder="Password" required />
        <br />
        <button className="btn btn-lg btn-success btn-inline mx-1" onClick={Login} style={{ width: "49 %" }} type="submit">Login</button>
        <button className="btn btn-lg btn-secondary btn-inline mx-1" onClick={() =>history.push('/register')} style={{ width: "49 %" }} type="button" id='register-redirect'>Register</button>
        <br />
        <p className="mt-3 mb-3 text-muted ">&mdash; Or Login with &mdash; </p>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        <a className="App-link"
          href='/'
          // target="_blank"
          rel="noopener noreferrer">Server</a>
      </form>
    </Col>
  </Row>
      
)}

export default LoginPage