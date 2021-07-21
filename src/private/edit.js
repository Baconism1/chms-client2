import React from 'react';
import auth from '../auth';
import Navbar from '../public/navbar';


export default class Edit extends React.Component {

    state = {
        emailAddress: '',
        password: '',
        firstName: '',
        lastName: '',
        middleName: '',
        username: '',
        school: ''
    }

    // fetch user information, then pre-populate each box with existing account info?
        // pre-population might already be done automatically if we input existing account info to this.state
    // see if you can add a pop-up post-submission that implies the request was successful
    
        constructor(props) {
            super();
        }

        componentDidMount() {
            var currentUsername = auth.getUsername();
            //console.log('edit.js is reporting username ' + currentUsername);
            fetch('/api/users/getUser', {method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: currentUsername})})
                .then(response => {
                    response.json()
                        .then(
                            (data)=>{this.setState(data)}
                        )
                })
        }
    
        render() {
          return (
            <div className="container-fluid">
              <div className="mb-5"><Navbar props={this.props}/></div>
              <div className="p-3"><h2>Edit Account Information</h2></div>
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
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder={this.state.emailAddress} //value={this.state.emailAddress}
                  readOnly/>
                  <div id="emailHelp" className="form-text">To change your email address, please <a href="/feedback" >contact an administrator</a>.</div>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password}
                  onChange={e=>this.setState({password: e.target.value})}/>
              </div>

              <div className="alert alert-warning" isOpen={true} role="alert">
                    Passwords must contain: <br />
                    At least 8 characters <br />
                    One capital and lowercase letter <br />
                    One number and special character 
                  </div>

              <div className="mb-3">
                  <label htmlFor="exampleInputSchool" className="form-label">School</label>
                  <input type="school" className="form-control" id="exampleInputSchool" value={this.state.school}
                  onChange={e=>this.setState({school: e.target.value})}/>
              </div>
    
              <button type="submit" className="btn btn-primary" onClick={
                  () => {
                    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                    var validPassword = strongRegex.test(this.state.password);
                    if (validPassword) {
                      fetch('/api/users/editUser', {method:'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state)})
                      .then(response => {
                        if (!response.ok)
                        {
                            console.error('Error' + JSON.stringify(response.status));
                        }
                        else this.props.history.push('/');
                      })
                    }
                  }
              }>Submit</button>
    
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