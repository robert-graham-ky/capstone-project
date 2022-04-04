import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };
  return (
    <div className="nav-wrapper">
      <div className="side-wrapper">
        <div className="nav-icon-wrapper">
          <FontAwesomeIcon icon="phone"></FontAwesomeIcon>
        </div>
        <div className="nav-text-wrapper">
          <div className="nav-text">555-555-5555</div>
          <div className="nav-text">11:30 AM to 8 PM</div>
        </div>
      </div>
      <div className="center-wrapper">
        <div className="nav-link-wrapper">
          {
            <NavLink
              exact
              to="/"
              activeClassName="nav-link-active"
            >
              Home
            </NavLink>
          }
        </div>
        <div className="nav-link-wrapper">{<NavLink
              exact
              to="/about"
              activeClassName="nav-link-active"
            >
              About
            </NavLink>}</div>

        <div className="nav-link-wrapper">
          {<NavLink
              exact
              to="/edit"
              activeClassName="nav-link-active"
            >
              Edit
            </NavLink>}
        </div>
      </div>
      <div className="side-wrapper">
        <div className="nav-icon-wrapper">
          <FontAwesomeIcon icon="mapMarkedAlt"></FontAwesomeIcon>
        </div>
        <div className="nav-text-wrapper">
          <div className="nav-text">700 Capital Ave</div>
          <div className="nav-text">Frankfort, KY 40601</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
