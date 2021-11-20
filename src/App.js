import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Login from './components/auth/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
