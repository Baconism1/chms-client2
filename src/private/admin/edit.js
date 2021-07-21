import React from 'react';
import Navbar from '../../public/navbar';

export default class Edit extends React.Component {

  state = {
    _id: '',
    emailAddress: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: '',
    username: '',
    school: '',
    isAdmin: '',
    searchClicked: ''
}

  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <div className="mb-5"><Navbar props={this.props}/></div>
        <h2>Find a User</h2>
        <div className="row">
          <div className="w-auto col-lg-1 col-centered">
            <div className="input-group py-5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Email address</span>
                </div>
                <input type="text" className="form-control" placeholder="hunter2@bookface.com" id="emailAddress" aria-describedby="basic-addon3" value={this.state.emailAddress}
                onChange={e=>this.setState({emailAddress: e.target.value})}/>
                <button type="submit" className="btn btn-primary" onClick={
                  () => {
                    this.setState({searchClicked: 1});
                    fetch('/api/admin/getUser', {method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({emailAddress: this.state.emailAddress})})
                      .then(response => {
                        response.json()
                            .then(
                                (data)=>{this.setState(data)}
                            )
                })}}>Search</button>
            </div>
          </div>
        </div>

      {this.state.searchClicked && 
        <div className="col-6 text-left col-centered">

        <div className="row align-items-center">
          <div className="col">
            <label htmlFor="exampleInputName" className="form-label">ID</label>
            <input type="firstName" className="form-control" id="exampleInputName" placeholder={this.state._id} value={this.state._id}
            readOnly/>
          </div>
        </div>

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
            <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.emailAddress}
            onChange={e=>this.setState({emailAddress: e.target.value})}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password}
            onChange={e=>this.setState({password: e.target.value})}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputSchool" className="form-label">School</label>
            <input type="school" className="form-control" id="exampleInputSchool" value={this.state.school}
            onChange={e=>this.setState({school: e.target.value})}/>
        </div>

        {/* <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={this.state.isAdmin} id="defaultCheck1"
          onChange={e=>{ 
            if (e.target.value === "on")
            {
              console.log("setting admin to true");
              this.setState({isAdmin: true});
            }
            else e.target.value = "off";
            console.log(e.target.value);
            console.log(this.state.isAdmin);
            }}/>
            <label className="form-check-label pb-3" htmlFor="defaultCheck1">
              Administrator
            </label>
        </div> */}

        <button type="submit" className="btn btn-primary mx-3" onClick={
            () => {
                console.log(this.isAdmin);
                // if (this.isAdmin == 'on')
                //   this.setState({isAdmin: true});
                fetch('/api/admin/editUser', {method:'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state)})
                .then(response => {
                  if (!response.ok)
                  {
                      console.error('Error' + JSON.stringify(response.status));
                  }
                  else this.props.history.push('/');
              })
            }
        }>Submit</button>

          <button type="delete" className="btn btn-outline-dark mx-3" onClick={
            () => {
                fetch('/api/admin/deleteUser', {method:'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state)})
                .then(response => {
                  if (!response.ok)
                  {
                      console.error('Error' + JSON.stringify(response.status));
                  }
                  else this.props.history.push('/');
              })
            }
          }>Delete</button>

        <div className="mb-3">
            <a href="/" >Back</a>
        </div>

        </div>
      }

      </div>
    )
  }

}
