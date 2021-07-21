import React from 'react';
import auth from '../auth';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// See how to move this into the navbar via Bootstrap!
// Forgot Password section might have to just route to Feedback as a stopgap

export default class Login extends React.Component { 

    state = {
        emailAddress: '',
        password: ''
    }

    constructor(props) {
        super();
    }

    render() {
        return (
            
            <div className="container-fluid">
                <div className="mb-5"><Navbar props={this.props}/></div>
                <div className="p-3"><h2>Login</h2></div>
                <div className="row">
                <div className="col"></div>
                <div className="col-6 text-left">


                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.emailAddress}
                    onChange={e=>this.setState({emailAddress: e.target.value})}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password}
                    onChange={e=>this.setState({password: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={
                    () => {
                        auth.login(JSON.stringify(this.state.emailAddress), JSON.stringify(this.state.password), (response)=> {
                            if (response === true)
                                this.props.history.push('/');
                            else this.props.history.push('/login');
                        })
                    }
                }>Login</button>

                <div className="mb-3">
                    <a href="/register" >Register</a>
                    <span className="p-2" >|</span>
                    <a href="/feedback" >Forgot password?</a>
                </div>
                

                </div>
                <div className="col"></div>
                </div>
            </div>
        )
    }
    
}
