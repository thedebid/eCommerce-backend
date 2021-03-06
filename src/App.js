import React, { Component } from "react";
import "./App.css";

import Login from "./components/Auth/Login";
import Main from "./components/Common/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route path="/signup" component={SignUp} /> */}
            <Route path="/login" component={Login} />
            {/* <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/maintenance" component={Maintenance} />*/}
            <Route component={Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
