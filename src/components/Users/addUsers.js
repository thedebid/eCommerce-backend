import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import httpClient from "./../../utils/httpClient";
import notify from "./../../utils/notify";
const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onAddUser = (data) => {
    console.log(data);
    httpClient
      .POST("/auth/register", data)
      .then((response) => {
        console.log(response);
        //console.log(response.data.message)
        notify.showSuccess(response.data.message);
        // localStorage.setItem("token", response.data.result.token);
        // localStorage.setItem("user", JSON.stringify(response.data.result.user));
        // localStorage.setItem("isLoggedIn", true);
        this.props.history.push("/view-users");
      })
      .catch((err) => {
        notify.handleError(err);
      })
      .finally(() => {
        //
      });
  };

  //in line css for error field
  let errorStyle = {
    border: "1px solid rgb(191, 22, 80)",
  };

  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h2>Add User</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Oculux</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">Main</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12">
            <div className="card">
              <div className="header">
                <h2> Enter User Details</h2>
              </div>
              <div className="body">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      {...register("email", {
                        required: "This field is required",
                      })}
                      style={errors.email ? errorStyle : {}}
                    />
                  </div>
                  {errors.email && (
                    <div className="mb-3">
                      <span className="error">{errors.email.message}</span>
                    </div>
                  )}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">#</span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      {...register("password", {
                        required: "You must specify a password",
                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                      })}
                      style={errors.password ? errorStyle : {}}
                    />
                  </div>
                  {errors.password && (
                    <div className="mb-3">
                      <span className="error">{errors.password.message}</span>
                    </div>
                  )}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">#</span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-label="Confirm Password"
                      aria-describedby="basic-addon1"
                      {...register("password_repeat", {
                        validate: (value) =>
                          value === password.current ||
                          "The passwords do not match",
                      })}
                      style={errors.password_repeat ? errorStyle : {}}
                    />
                  </div>
                  {errors.password_repeat && (
                    <div className="mb-3">
                      <span className="error">
                        {errors.password_repeat.message}
                      </span>
                    </div>
                  )}
                  <input
                    type="submit"
                    onClick={handleSubmit(onAddUser)}
                    className="btn btn-primary mr-1"
                    value="Login"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddUser;
