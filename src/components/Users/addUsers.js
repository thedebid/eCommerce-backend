import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import httpClient from "./../../utils/httpClient";
import notify from "./../../utils/notify";

const AddUser = (props) => {
  //Hook for managing form state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //It trigger when submit button clicked
  const onAddUser = (data) => {
    //Setting form submitting is true
    setIsSubmitting(true);

    //Making post request to server using axios
    httpClient
      .POST("/auth/register", data)
      .then((response) => {
        //If result got success change route
        props.history.push("/view-users");

        //Show success popup
        notify.showSuccess(response.data.message);
      })
      .catch((err) => {
        //If result got failure

        //Show error message
        notify.handleError(err);

        //Setting form submitting is false
        setIsSubmitting(false);
      })
      .finally(() => {
        //
      });
  };

  //in line css for error field
  let errorStyle = {
    border: "1px solid rgb(191, 22, 80)",
  };
  //Button for conditional rendering based on form state
  let btn = isSubmitting ? (
    <button disabled className="btn btn-primary mr-1">
      Submitting...{" "}
    </button>
  ) : (
    <button
      type="submit"
      className="btn btn-primary mr-1"
      onClick={handleSubmit(onAddUser)}
    >
      Submit
    </button>
  );

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
                  {btn}
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
