import React from "react";
import { connect } from "react-redux";

import UserCreateModal from "../../Admin/Modal/UsersModal/Create/";

import "./header.scss";

const Header = (props) => {
  const { title, subTitle, type } = props;

  if (type === undefined) {
    return (
      <div className="dashboard__header">
        <div className="dashboard__welcomeMessage welcomeMessage">
          <h3 className="welcomeMessage__title">{title}</h3>
          <p className="welcomeMessage__name">{subTitle}</p>
        </div>
      </div>
    );
  } else if (type === "processing") {
    return (
      <div className="dashboard__header">
        <div className="dashboard__welcomeMessage welcomeMessage">
          <h3 className="welcomeMessage__title">{title}</h3>
          <p className="welcomeMessage__name">{subTitle}</p>
        </div>
        <div className="revenue__buttons"></div>
      </div>
    );
  } else if (title === "Admin") {
    if (type === "AdminUsers") {
      return (
        <div className="dashboard__header">
          <div className="dashboard__welcomeMessage welcomeMessage">
            <h3 className="welcomeMessage__title">{title}</h3>
          </div>
          <div className="revenue__buttons">
            <UserCreateModal
              buttonLabel="+ Add New User"
              className="TeamsCreateModalCustomCss"
            />
          </div>
        </div>
      );
    } else if (type === "AdminSettings") {
      return (
        <div className="dashboard__header">
          <div className="dashboard__welcomeMessage welcomeMessage">
            <h3 className="welcomeMessage__title">{title}</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dashboard__header">
          <div className="dashboard__welcomeMessage welcomeMessage">
            <h3 className="welcomeMessage__title">{title}</h3>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="dashboard__header">
        <div className="dashboard__welcomeMessage welcomeMessage">
          <h3 className="welcomeMessage__title">{title}</h3>
          <p className="welcomeMessage__name">{subTitle}</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
