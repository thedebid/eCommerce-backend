import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Header from "./Header";
// import ThemeSetting from "./ThemeSetting";
// import Searchbar from "./Searchbar";
// import Rightbar from "./Rightbar";
// import Megamenu from "./Megamenu";
import Routes from "../Route";

export default class Layout extends Component {
  render() {
    return (
      <>
        {/* <ThemeSetting /> */}
        <div className="overlay" />
        <div id="wrapper">
          <Header />
          {/*  <Searchbar />
          <Megamenu />
          <Rightbar /> */}
          <Menu {...this.props} />
          <div id="main-content">
            <Switch>
              {Routes.map((layout, i) => {
                return (
                  <Route
                    key={`r${i}`}
                    exact={layout.exact}
                    path={layout.path}
                    component={layout.component}
                  ></Route>
                );
              })}
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
