import React from "react";
import LoginForm from "./LoginForm";
import Illustration from "../../../assets/svg/udi-illustration.svg";
import Logo from "../../../assets/svg/udi-logo.svg";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__wrapper">
        <div className="loginPage__image-wrapper">
          <div className="loginPage__image-wrapper__inner">
            <div className="loginPage__image-wrapper__inner__logo">
              <img src={Logo} alt="" width="217px" height="59px" />
            </div>
            <div className="loginPage__image-wrapper__inner__subscribe">
              UDI COMPLIANCE SOLUTIONS
            </div>
            <div className="loginPage__image-wrapper__inner__image-container">
              <img src={Illustration} alt="" width="100%" height="100%" />
            </div>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
