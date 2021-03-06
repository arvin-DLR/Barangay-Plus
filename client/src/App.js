<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Signup';
import Login from './components/auth/Signin';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container maxWidth='xs'>
            <Navbar/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component ={Register}/>
            <Route exact path="/login" component={Login}/>
          </Container>
        </div>
      </Router>
    );
  }
}
=======
import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';


import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch();

    }, []);

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
};


>>>>>>> parent of 3a7199c (part 2 update)
export default App;