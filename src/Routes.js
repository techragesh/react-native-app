import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import home from './pages/home';


export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true}></Scene>
          <Scene key="signup" component={Signup} title="Register"></Scene>
          <Scene key="home" component={home} title="Home"></Scene>
        </Stack>
      </Router>
    )
  }
}
