import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './protected.route';
import { ProtectedAdminRoute } from './protected.admin.route'
import Home from './public/home';
import userEdit from './private/edit';
import Tools from './private/tools';
import adminEdit from './private/admin/edit';
import Feedback from './public/feedback';
import Login from './public/login';
import Register from './public/register';
import Footer from './public/footer';


class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/api/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">

        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/userEdit" component={userEdit} />
          <ProtectedRoute path="/tools" component={Tools} />
          
          <ProtectedAdminRoute path="/admin/edit" component={adminEdit} />
          
          <Route path="/notAuthorized" component={()=> 'Not Authorized'} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/feedback" component={Feedback} />

          <Route path="*" component={()=> 'Page not found.'} />
        </Switch>
      </BrowserRouter>
      <p className="App-intro">{this.state.data}</p>
      <div className="mb-5"><Footer props={this.props}/></div>
      </div>
    );
  }
}

export default App;