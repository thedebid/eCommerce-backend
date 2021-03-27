import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <>
        <div class="pattern">
          <span class="red"></span>
          <span class="indigo"></span>
          <span class="blue"></span>
          <span class="green"></span>
          <span class="orange"></span>
        </div>
        <div className="auth-main particles_js">
          <div className="auth_div vivify popIn">
            <div className="card">
              <div className="body">
                <p className="lead">Login to your account</p>
                <form className="form-auth-small m-t-20" action="/">
                  <div className="form-group">
                    <label
                      htmlFor="signin-email"
                      className="control-label sr-only"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control round"
                      id="signin-email"
                      defaultValue="user@domain.com"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="signin-password"
                      className="control-label sr-only"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control round"
                      id="signin-password"
                      defaultValue="thisisthepassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group clearfix">
                    <label className="fancy-checkbox element-left">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-round btn-block"
                  >
                    LOGIN
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div id="particles-js"></div>
        </div>
      </>
    );
  }
}
