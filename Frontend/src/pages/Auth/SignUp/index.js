import React from "react";
import SignUpForm from "./SignUpForm";
import Illustration from "../../../assets/svg/udi-illustration.svg";
import Logo from "../../../assets/svg/udi-logo.svg";

const SignUp = () => {
  return (
    <div className="signupPage">
      <div className="signupPage__wrapper">
        <div className="signupPage__image-wrapper">
          <div className="signupPage__image-wrapper__inner">
            <div className="signupPage__image-wrapper__inner__logo">
              <img src={Logo} alt="" width="217px" height="59px" />
            </div>
            <div className="signupPage__image-wrapper__inner__subscribe">
              UDI COMPLIANCE SOLUTIONS
            </div>
            <div className="signupPage__image-wrapper__inner__image-container">
              <img src={Illustration} alt="" width="100%" height="100%" />
            </div>
          </div>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
