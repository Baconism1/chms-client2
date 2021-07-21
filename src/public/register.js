import React from 'react';
import Navbar from './navbar';

export default class Register extends React.Component {

  state = {
    emailAddress: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: '',
    username: '',
    school: ''
}

    constructor(props) {
        super();
    }

    render() {
        var openWarning = true;
      return (
        <div className="container-fluid">
              <div className="mb-5"><Navbar props={this.props}/></div>
              <div className="p-3"><h2>Register</h2></div>
          <div className="row">
          <div className="col"></div>
          <div className="col-6 text-left">

          <div className="row align-items-center">
            <div className="col">
                <label htmlFor="exampleInputName" className="form-label">First name</label>
                <input type="firstName" className="form-control" id="exampleInputName" value={this.state.firstName}
                onChange={e=>this.setState({firstName: e.target.value})}/>
            </div>
            <div className="col">
                <label htmlFor="exampleInputName" className="form-label">Last name</label>
                <input type="lastName" className="form-control" id="exampleInputName" value={this.state.lastName}
                onChange={e=>this.setState({lastName: e.target.value})}/>
            </div>
            <div className="col">
                <label htmlFor="exampleInputName" className="form-label">Middle name</label>
                <input type="middleName" className="form-control" id="exampleInputName" value={this.state.middleName}
                onChange={e=>this.setState({middleName: e.target.value})}/>
            </div>
          </div>

          <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Username</label>
              <input type="username" className="form-control" id="exampleInputName" value={this.state.username}
              onChange={e=>this.setState({username: e.target.value})}/>
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@website.com" value={this.state.emailAddress}
              onChange={e=>this.setState({emailAddress: e.target.value})}/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password}
              onChange={e=>this.setState({password: e.target.value})}/>
          </div>
        
        {openWarning && 
          <div className="alert alert-warning" isOpen={true} role="alert">
                    Passwords must contain: <br />
                    At least 8 characters <br />
                    One capital and lowercase letter <br />
                    One number and special character 
                  </div>
        }

          <div className="mb-3">
              <label htmlFor="exampleInputSchool" className="form-label">School</label>
              <input type="school" className="form-control" id="exampleInputSchool" value={this.state.school}
              onChange={e=>this.setState({school: e.target.value})}/>
          </div>

          <button type="submit" className="btn btn-primary" onClick={
              () => {
                  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                  var validPassword = strongRegex.test(this.state.password);
                  if (!validPassword) {
                      openWarning = true;
                    
                  }
                  else {
                  fetch('/api/users/registerUser', {method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state)})
                  .then(response => {
                    if (!response.ok)
                    {
                        console.error('Error' + JSON.stringify(response.status));
                    }
                    else this.props.history.push('/');
                    })
                }
              }
          }>Register</button>

          <div className="mb-3">
              <a href="/" >Back</a>
          </div>


          </div>
          <div className="col"></div>
          </div>
      </div>
      );
    }
  }