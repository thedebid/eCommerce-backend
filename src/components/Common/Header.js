import React, { useState } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import {
//   toggleMegamenu,
//   toggleSearchBar,
//   toggleNotificationBar,
//   setOffcanvas,
// } from "../../actions/settingsAction";

const Header = ({
  toggleMegamenu,
  isMegaMenu,
  toggleNotificationBar,
  toggleSearchBar,
  setOffcanvas,
  offcanvas,
}) => {
  const [scrolled, setScrolled] = useState(0);
  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolleda = `${(scrollPx / winHeightPx) * 100}%`;
    setScrolled(scrolleda);
  };
  window.addEventListener("scroll", scrollProgress);

  const progressContainerStyle = {
    background: "#f8bbd0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    height: "2px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 99,
  };

  const progressBarStyle = {
    // height: "2px",
    // background: "#e91e63",
    width: scrolled,
  };
  console.log(scrolled, "nbnvhffhfgh");
  return (
    <>
      <nav className="navbar top-navbar">
        <div className="container-fluid">
          <div className="navbar-left">
            <div className="navbar-btn">
              <Link to="/">
                <img
                  src="../assets/images/icon.svg"
                  alt="Oculux Logo"
                  className="img-fluid logo"
                />
              </Link>
              <button
                type="button"
                className="btn-toggle-offcanvas"
                onClick={() => setOffcanvas(!offcanvas)}
              >
                <i className="lnr lnr-menu fa fa-bars"></i>
              </button>
            </div>
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <span
                  className="dropdown-toggle icon-menu"
                  data-toggle="dropdown"
                >
                  <i className="icon-envelope"></i>
                  <span className="notification-dot bg-green">4</span>
                </span>
                <ul className="dropdown-menu right_chat email vivify fadeIn">
                  <li className="header green">You have 4 New eMail</li>
                  <li>
                    <Link to="/">
                      <div className="media">
                        <div className="avtar-pic w35 bg-red">
                          <span>FC</span>
                        </div>
                        <div className="media-body">
                          <span className="name">
                            James Wert{" "}
                            <small className="float-right text-muted">
                              Just now
                            </small>
                          </span>
                          <span className="message">Update GitHub</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a href="/">
                      <div className="media">
                        <div className="avtar-pic w35 bg-indigo">
                          <span>FC</span>
                        </div>
                        <div className="media-body">
                          <span className="name">
                            Folisise Chosielie{" "}
                            <small className="float-right text-muted">
                              12min ago
                            </small>
                          </span>
                          <span className="message">New Messages</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="media">
                        <img
                          className="media-object "
                          src="../assets/images/xs/avatar5.jpg"
                          alt="avatar"
                        />
                        <div className="media-body">
                          <span className="name">
                            Louis Henry{" "}
                            <small className="float-right text-muted">
                              38min ago
                            </small>
                          </span>
                          <span className="message">Design bug fix</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="media mb-0">
                        <img
                          className="media-object "
                          src="../assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <div className="media-body">
                          <span className="name">
                            Debra Stewart{" "}
                            <small className="float-right text-muted">
                              2hr ago
                            </small>
                          </span>
                          <span className="message">Fix Bug</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <span
                  className="dropdown-toggle icon-menu"
                  data-toggle="dropdown"
                >
                  <i className="icon-bell"></i>
                  <span className="notification-dot bg-azura">4</span>
                </span>
                <ul className="dropdown-menu feeds_widget vivify fadeIn">
                  <li className="header blue">You have 4 New Notifications</li>
                  <li>
                    <a href="/">
                      <div className="feeds-left bg-red">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="feeds-body">
                        <h4 className="title text-danger">
                          Issue Fixed{" "}
                          <small className="float-right text-muted">
                            9:10 AM
                          </small>
                        </h4>
                        <small>
                          WE have fix all Design bug with Responsive
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="feeds-left bg-info">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="feeds-body">
                        <h4 className="title text-info">
                          New User{" "}
                          <small className="float-right text-muted">
                            9:15 AM
                          </small>
                        </h4>
                        <small>I feel great! Thanks team</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="feeds-left bg-orange">
                        <i className="fa fa-question-circle"></i>
                      </div>
                      <div className="feeds-body">
                        <h4 className="title text-warning">
                          Server Warning{" "}
                          <small className="float-right text-muted">
                            9:17 AM
                          </small>
                        </h4>
                        <small>Your connection is not private</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div className="feeds-left bg-green">
                        <i className="fa fa-thumbs-o-up"></i>
                      </div>
                      <div className="feeds-body">
                        <h4 className="title text-success">
                          2 New Feedback{" "}
                          <small className="float-right text-muted">
                            9:22 AM
                          </small>
                        </h4>
                        <small>
                          It will give a smart finishing to your site
                        </small>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown language-menu">
                <span
                  className="dropdown-toggle icon-menu"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-language"></i>
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <span className="dropdown-item pt-2 pb-2">
                    <img
                      src="../assets/images/flag/us.svg "
                      className="w20 mr-2 rounded-circle"
                      alt="avatar"
                    />{" "}
                    US English
                  </span>
                  <span className="dropdown-item pt-2 pb-2">
                    <img
                      src="../assets/images/flag/gb.svg "
                      className="w20 mr-2 rounded-circle"
                      alt="avatar"
                    />{" "}
                    UK English
                  </span>
                  <div className="dropdown-divider"></div>
                  <span className="dropdown-item pt-2 pb-2">
                    <img
                      src="../assets/images/flag/russia.svg "
                      className="w20 mr-2 rounded-circle"
                      alt="avatar"
                    />{" "}
                    Russian
                  </span>
                  <span className="dropdown-item pt-2 pb-2">
                    <img
                      src="../assets/images/flag/arabia.svg "
                      className="w20 mr-2 rounded-circle"
                      alt="avatar"
                    />{" "}
                    Arabic
                  </span>
                  <span className="dropdown-item pt-2 pb-2">
                    <img
                      src="../assets/images/flag/france.svg "
                      className="w20 mr-2 rounded-circle"
                      alt="avatar"
                    />{" "}
                    French
                  </span>
                </div>
              </li>
              <li style={{ cursor: "pointer" }}>
                <span
                  onClick={() => toggleMegamenu(!isMegaMenu)}
                  className={`megamenu_toggle icon-menu`}
                  title="Mega Menu"
                >
                  Mega
                </span>
              </li>
              <li className="p_social">
                <Link
                  to="/page-social"
                  className="social icon-menu"
                  title="News"
                >
                  Social
                </Link>
              </li>
              <li className="p_news">
                <Link to="/page-news" className="news icon-menu" title="News">
                  News
                </Link>
              </li>
              <li className="p_blog">
                <Link to="/page-blog" className="blog icon-menu" title="Blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <div id="navbar-menu">
              <ul className="nav navbar-nav">
                <li>
                  <span
                    onClick={() => toggleSearchBar(true)}
                    className="search_toggle icon-menu"
                    title="Search Result"
                  >
                    <i className="icon-magnifier"></i>
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => toggleNotificationBar(true)}
                    className="right_toggle icon-menu"
                    title="Right Menu"
                  >
                    <i className="icon-bubbles"></i>
                    <span className="notification-dot bg-pink">2</span>
                  </span>
                </li>
                <li>
                  <Link to="/login" className="icon-menu">
                    <i className="icon-power"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="progress-container">
          <div
            style={progressBarStyle}
            className="progress-bar"
            id="myBar"
          ></div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  isMegaMenu: state.settings.isMegaMenu,
  offcanvas: state.settings.offcanvas,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleMegamenu: (e) => dispatch(toggleMegamenu(e)),
//   toggleSearchBar: (e) => dispatch(toggleSearchBar(e)),
//   toggleNotificationBar: (e) => dispatch(toggleNotificationBar(e)),
//   setOffcanvas: (e) => dispatch(setOffcanvas(e)),
// });
export default Header;
