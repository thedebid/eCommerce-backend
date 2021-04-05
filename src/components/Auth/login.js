import React, { Component } from "react";
import httpClient from "../../utils/httpClient";
import notify from "../../utils/notify";
import { Button } from "../Common/Button/Button";

const defaultForm = {
  email: "",
  password: "",
  usernameErr: "",
  passwordErr: "",
  remember_me: false,
};

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        ...defaultForm,
      },
      error: {
        ...defaultForm,
      },
      isSubmitting: false,
      isValidForm: false,
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
   
      this.setState(preState => ({
        data: {
            ...preState.data,
            [name]:value
        }
    }),()=>{
      this.validateForm(name);

    })
  };

  // for login form validation
  validateForm(fieldName) {
    let errMsg;
    switch (fieldName) {
      case "email":
        errMsg = this.state.data[fieldName]
          ? this.state.data[fieldName].includes("@") &&
            this.state.data[fieldName].includes(".com")
            ? ""
            : "Invalid email*"
          : "required field";
        break;
      case "password":
        errMsg = this.state.data[fieldName]
          ? this.state.data[fieldName].length < 5
            ? "weak password"
            : ""
          : "required field*";
        break;

      default:
        break;
    }
    this.setState(
      (preState) => ({
        error: {
          ...preState.error,
          [fieldName]: errMsg,
        },
      }),
      () => {
        const errors = Object.values(this.state.error).filter((err) => err);
        console.log("errors >", errors);

        this.setState({
          isValidForm: errors.length === 0,
        });
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("remember_me", this.state.remember_me);
    this.setState({
      isSubmitting: true,
    });

    // Check login
    // httpClient is a function which is defined utils sections with the help of axios
    httpClient
      .POST("/auth/login", this.state)
      .then((response) => {
        this.setState({
          isSubmitting: false,
        });
        notify.showSuccess(response.data.message);
        localStorage.setItem("token", response.data.result.token);
        localStorage.setItem("user", JSON.stringify(response.data.result.user));
        localStorage.setItem("isLoggedIn", true);
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          isSubmitting: false,
        });
        notify.handleError(err);
      })
      .finally(() => {
        //
      });
  }
  render() {
    let btn = this.state.isSubmitting 
    ? (<button disabled className="btn btn-primary btn-round btn-block">LOGGING IN... </button>) 
    : (<button type="submit" className="btn btn-primary btn-round btn-block">LOGIN</button>);
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
                  noValidate
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
                      required
                    />
                    <p className="error">{this.state.error.email}</p>
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
                     <p className="error">{this.state.error.password}</p>
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

                  <Button
                    isSubmitting={this.state.isSubmitting}
                    isDisabled={!this.state.isValidForm}
                    label="LOGIN"
                    disabledLabel="LOGGING IN..."
                  ></Button>
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
