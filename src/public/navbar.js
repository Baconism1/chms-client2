import React, { useState } from 'react';
import auth from '../auth';
import spaget from './spaget.png'

export default function Navbar({props}) {

  var [loginEmail, setEmail] = useState("");
  var [loginPassword, setPassword] = useState("");
  
  return <div className="navbar navbar-expand-sm absolute-top navbar-light bg-light mx-5 mt-4">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src={spaget} class="d-inline-block align-top" alt=""/>
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="navItem">
        </li>
        <li className="navItem">
          <a href="/tools" className="nav-link">Tools</a>
        </li>
        <li className="navItem">
          <a href="/payments" className="nav-link">Payments</a>
        </li>
        <li className="navItem">
          <a href="/feedback" className="nav-link">Contact Us</a>
        </li>
        <li className="navItem">
          <a href="/userEdit" className="nav-link">Account</a>
        </li>
      </ul>

      {!auth.isAuthenticated() &&
      <div className="mb-4 p-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@website.com" value={loginEmail}
          onChange={e => setEmail(e.target.value)}/>
      </div>
      }

      {!auth.isAuthenticated() &&
      <div className="mb-4 p-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="••••••••" value={loginPassword}
        onChange={e => setPassword(e.target.value)}/>
      </div>
      }

      {!auth.isAuthenticated() &&
        <button type="submit" className="btn btn-primary mt-1 bg-primary" onClick={
          () => {
              auth.login(JSON.stringify(loginEmail), JSON.stringify(loginPassword), (response)=> {
                      setEmail("");
                      setPassword("");
                      props.history.push('/');
              })
          }
        }>Login</button>
      }

      {!auth.isAuthenticated() &&
        <a href="/register" className="btn btn-secondary mt-1 mx-1">Register</a>
      }

    {/* <div id="loginAlert" class="alert alert-danger collapse">
      <a href="#" class="close" data-dismiss="alert" />
        Login failed.
    </div> */}

      <div className="d-flex mx-1 mt-1 p-2">
        <button className="btn btn-outline-dark"
          onClick={
            () => {
              auth.logout(() => {
                props.history.push('/');
              });
            }
          }>Logout</button>
      </div>
    </div>
  </div>;
}