import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Login from "./components/Auth/login";
import Main from "./components/Common/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from 'material-react-toastify';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        localStorage.getItem("isLoggedIn") ? (
          <>
            <Component {...routeProps}></Component>
          </>
        ) : (
          <Redirect to="/login"></Redirect>
        )
      }
    ></Route>
  );
};
class App extends Component {
  render() {
    const {
      themeColor,
      fontStyle,
      lightVersion,
      RtlVersion,
      offcanvas,
      miniSidebar,
      horizontalMenu,
      miniHover,
    } = this.props;
    document.getElementsByTagName(
      "body"
    )[0].className = `${themeColor} ${fontStyle}${
      lightVersion ? " light_version" : ""
    }${RtlVersion ? " rtl" : ""}${offcanvas ? " offcanvas-active" : ""}${
      horizontalMenu ? " h-menu" : ""
    }${miniSidebar ? " mini_sidebar" : ""}${miniHover ? " mini_hover" : ""}`;
    return (
      <div
        ref={(leftSidebar) => {
          this.leftSidebar = leftSidebar;
        }}
      >
        <ToastContainer />
        <Router>
          <Switch>
            {/* <Route path="/signup" component={SignUp} /> */}
            <Route path="/login" component={Login} />
            {/* <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/maintenance" component={Maintenance} />*/}
            <ProtectedRoute exact component={Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  themeColor: state.settings.themeColor,
  fontStyle: state.settings.fontStyle,
  lightVersion: state.settings.lightVersion,
  RtlVersion: state.settings.RtlVersion,
  offcanvas: state.settings.offcanvas,
  horizontalMenu: state.settings.horizontalMenu,
  miniSidebar: state.settings.miniSidebar,
  miniHover: state.settings.miniHover,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
