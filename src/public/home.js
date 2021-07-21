import React from 'react';
import auth from '../auth';
import Navbar from './navbar';
//import styles from './home.module.css';

export default class Home extends React.Component { 

    constructor(props) {
      super();
    }

    render() {
        return (
          <div>
            <div className="mb-5"><Navbar props={this.props}/></div>
            <div className="p-3"><h2>Welcome to CHMS</h2></div>
            
            <div className="row my-4 px-5">
              <div className="col mb">
                <div className="card" >
                <div className="card-body">
                  <h4 className="card-title">Tools</h4>
                  <p className="card-text text-secondary">
                    View and download various tools.
                  </p>
                  <a href="/tools" className="btn btn-primary">View Tools</a>
                </div>
              </div>
            </div>

            <div className="col md-3">
                <div className="card" >
                <div className="card-body">
                  <h4 className="card-title">Contact Us</h4>
                  <p className="card-text text-secondary">
                    Send an email to the site administrators.
                  </p>
                  <a href="/feedback" className="btn btn-primary">Contact Us</a>
                </div>
              </div>
            </div>

            <div className="col md-3">
                <div className="card" >
                <div className="card-body">
                  <h4 className="card-title">Account</h4>
                  <p className="card-text text-secondary">
                    View and modify account information.
                  </p>
                  <a href="/userEdit" className="btn btn-primary">Account</a>
                </div>
              </div>
            </div>

            </div>

            {auth.isAdmin() && 
              <div className="row my-4 px-5">
                  <div className="col md-3">
                <div className="card" >
                <div className="card-body">
                  <h4 className="card-title">Search/Modify Users</h4>
                  <p className="card-text text-secondary">
                    Search for a specific user account, and modify/delete their information.
                  </p>
                  <a href="/admin/edit" className="btn btn-primary">Search Users</a>
                </div>
              </div>
            </div>
              </div>
            }
          </div>
        )
      }
    

}