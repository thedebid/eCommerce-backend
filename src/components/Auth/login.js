import React, { Component } from "react";
import { Link } from "react-router-dom";
import httpClient from "../../utils/httpClient";
import notify from "../../utils/notify";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      usernameErr: "",
      passwordErr: "",
      remember_me: false,
      isSubmitting: false,
      isValidForm: true,
    };
  }

  componentDidMount() {
    // if (localStorage.getItem("remember_me")) {
    //   this.props.history.push("/");
    // }
  }

  handleChange = (e) => {
    //console.log('On change >>',e.target);
    let { type, name, value, checked } = e.target;
    // console.log('name is ', name);
    // console.log('value is', value);
    // console.log('checked is', checked);
    if (type === "checked") {
      value = checked;
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("remember_me", this.state.remember_me);

    //Check login
    //httpClient is a function which is defined utils sections with the help of axios
    httpClient
      .POST("/auth/login", this.state)
      .then((response) => {
        //console.log(response.data.message)
        notify.showSuccess(response.data.message);
        localStorage.setItem("token", response.data.result.token);
        localStorage.setItem("user", JSON.stringify(response.data.result.user));
        localStorage.setItem("isLoggedIn", true);
        this.props.history.push("/");
      })
      .catch((err) => {
        notify.handleError(err);
      })
      .finally(() => {
        //
      });
    // this.setState({
    //     isSubmitting:true
    // })
  }
  render() {
    return (
      <>
        <div className="pattern">
          <span className="red"></span>
          <span className="indigo"></span>
          <span className="blue"></span>
          <span className="green"></span>
          <span className="orange"></span>
        </div>
        <div className="auth-main particles_js">
          <div className="auth_div vivify popIn">
            <div className="card">
              <div className="body">
                <p className="lead">Login to your account</p>
                <form
                  className="form-auth-small m-t-20"
                  onSubmit={this.handleSubmit.bind(this)}
                >
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
                      id="email"
                      name="email"
                      placeholder="user@domain.com"
                      onChange={this.handleChange}
                    />
                    <label></label>
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
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group clearfix">
                    <label className="fancy-checkbox element-left">
                      <input
                        type="checkbox"
                        onChange={this.handleChange}
                        name="remember_me"
                      />
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
