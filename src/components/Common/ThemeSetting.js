import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setThemeColor,
  setFontStyle,
  setLightTheme,
  setRtlVersion,
  setHorizontalMenu,
  setMiniSidebar,
  setMiniSidebarMenuOn,
} from "../../actions/settingsAction";

const ThemeSetting = ({
  setThemeColor,
  themeColor,
  setFontStyle,
  fontStyle,
  setLightTheme,
  lightVersion,
  setRtlVersion,
  RtlVersion,
  horizontalMenu,
  setMiniSidebar,
  setHorizontalMenu,
  miniSidebar,
  setMiniSidebarMenuOn,
  miniSideMenuOn,
}) => {
  const [openSettingBar, setOpenSettingBar] = useState(false);
  return (
    <div className={`themesetting ${openSettingBar ? " open" : ""}`}>
      <span
        className="theme_btn"
        onClick={() => setOpenSettingBar(!openSettingBar)}
      >
        <i className="icon-magic-wand"></i>
      </span>
      <div className="card theme_color">
        <div className="header">
          <h2>Theme Color</h2>
        </div>
        <ul className="choose-skin list-unstyled mb-0">
          <li
            data-theme="green"
            className={themeColor === "theme-green" ? "active" : ""}
            onClick={() => setThemeColor("theme-green")}
          >
            <div className="green mr-1"></div>
          </li>
          <li
            data-theme="orange"
            className={themeColor === "theme-orange" ? "active" : ""}
            onClick={() => setThemeColor("theme-orange")}
          >
            <div className="orange mr-1"></div>
          </li>
          <li
            data-theme="blush"
            className={themeColor === "theme-blush" ? "active" : ""}
            onClick={() => setThemeColor("theme-blush")}
          >
            <div className="blush mr-1"></div>
          </li>
          <li
            data-theme="cyan"
            className={themeColor === "theme-cyan" ? "active" : ""}
            onClick={() => setThemeColor("theme-cyan")}
          >
            <div className="cyan mr-1"></div>
          </li>
          <li
            data-theme="indigo"
            className={themeColor === "theme-indigo" ? "active" : ""}
            onClick={() => setThemeColor("theme-indigo")}
          >
            <div className="indigo mr-1"></div>
          </li>
          <li
            data-theme="red"
            className={themeColor === "theme-red" ? "active" : ""}
            onClick={() => setThemeColor("theme-red")}
          >
            <div className="red mr-1"></div>
          </li>
        </ul>
      </div>
      <div className="card font_setting">
        <div className="header">
          <h2>Font Settings</h2>
        </div>
        <div>
          <div className="fancy-radio mb-2">
            <label>
              <input
                name="font"
                value="font-krub"
                type="radio"
                onChange={() => setFontStyle("font-krub")}
                checked={fontStyle === "font-krub" && "checked"}
              />
              <span>
                <i></i>Krub Google font
              </span>
            </label>
          </div>
          <div className="fancy-radio mb-2">
            <label>
              <input
                name="font"
                value="font-montserrat"
                type="radio"
                onChange={() => setFontStyle("font-montserrat")}
                checked={fontStyle === "font-montserrat" ? "checked" : ""}
              />
              <span>
                <i></i>Montserrat Google font
              </span>
            </label>
          </div>
          <div className="fancy-radio">
            <label>
              <input
                name="font"
                value="font-roboto"
                onChange={() => setFontStyle("font-roboto")}
                type="radio"
                checked={fontStyle === "font-roboto" ? "checked" : ""}
              />
              <span>
                <i></i>Robot Google font
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="card setting_switch">
        <div className="header">
          <h2>Settings</h2>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Light Version
            <div className="float-right">
              <label className="switch">
                <input
                  type="checkbox"
                  className="lv-btn"
                  onChange={() => setLightTheme(!lightVersion)}
                  checked={lightVersion ? "checked" : ""}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </li>
          <li className="list-group-item">
            RTL Version
            <div className="float-right">
              <label className="switch">
                <input
                  type="checkbox"
                  className="rtl-btn"
                  onChange={() => setRtlVersion(!RtlVersion)}
                  checked={RtlVersion}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </li>
          {/* <li className="list-group-item">
                        Horizontal Menu
                <div className="float-right">
                            <label className="switch">
                                <input type="checkbox" className="hmenu-btn" onChange={() => setHorizontalMenu(!horizontalMenu)} checked={horizontalMenu} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </li> */}
          <li className="list-group-item">
            Mini Sidebar
            <div className="float-right">
              <label className="switch">
                <input
                  type="checkbox"
                  className="mini-sidebar-btn"
                  onChange={() => {
                    setMiniSidebar(!miniSidebar);
                    setMiniSidebarMenuOn(!miniSideMenuOn);
                  }}
                  checked={miniSidebar}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="card">
                <div className="form-group">
                    <label className="d-block">Traffic this Month <span className="float-right">77%</span></label>
                    <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: "77%" }}></div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="d-block">Server Load <span className="float-right">50%</span></label>
                    <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}></div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  themeColor: state.settings.themeColor,
  fontStyle: state.settings.fontStyle,
  lightVersion: state.settings.lightVersion,
  RtlVersion: state.settings.RtlVersion,
  horizontalMenu: state.settings.horizontalMenu,
  miniSidebar: state.settings.miniSidebar,
  miniSideMenuOn: state.settings.miniSideMenuOn,
});

const mapDispatchToProps = (dispatch) => ({
  setThemeColor: (e) => dispatch(setThemeColor(e)),
  setFontStyle: (e) => dispatch(setFontStyle(e)),
  setMiniSidebar: (e) => dispatch(setMiniSidebar(e)),
  setLightTheme: (e) => dispatch(setLightTheme(e)),
  setRtlVersion: (e) => dispatch(setRtlVersion(e)),
  setHorizontalMenu: (e) => dispatch(setHorizontalMenu(e)),
  setMiniSidebarMenuOn: (e) => dispatch(setMiniSidebarMenuOn(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSetting);
