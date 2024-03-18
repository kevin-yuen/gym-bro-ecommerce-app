import React from "react";
import { NavLink } from "react-router-dom";

// components
import BrandComponent from "../../components/common/BrandComponent";
import AuthButtonComponent from "../../components/common/AuthButtonComponent";
import TrademarkComponent from "../../components/common/TrademarkComponent";

export default function CreateAccount() {
  return (
    <div className="container text-center ps-sm-7 pe-sm-7 ps-xl-15 pe-xl-15">
      <h1 className="fs-2 custom-font-family-teko custom-color-darkpurple">
        <BrandComponent customWidth={10} customHeight={10} />
      </h1>
      <div className="border border-secondary-subtle border-1 rounded-2 text-start pt-3 pb-3">
        <h2 className="ms-5 fw-bolder">Create account</h2>
        <form>
          <div className="ps-5 pe-5">
            <label htmlFor="your-name" className="form-label fw-medium fs-13">
              Your name
            </label>
            <input
              type="text"
              className="form-control fs-13"
              id="your-name"
              placeholder="First and Last name"
            />
          </div>
          <div className="ps-5 pe-5 mt-2">
            <label htmlFor="email" className="form-label fw-medium fs-13">
              Email
            </label>
            <input type="email" className="form-control fs-13" id="email" />
          </div>
          <div className="ps-5 pe-5 mt-2">
            <label htmlFor="password" className="form-label fw-medium fs-13">
              Password
            </label>
            <input
              type="password"
              className="form-control fs-13"
              id="password"
              placeholder="At least any 6 characters"
            />
          </div>
          <div className="ps-5 pe-5 mt-2">
            <label
              htmlFor="re-enter password"
              className="form-label fw-medium fs-13"
            >
              Re-enter password
            </label>
            <input
              type="password"
              className="form-control fs-13"
              id="re-enter-password"
            />
          </div>
          <div className="ps-5 pe-5 mt-3 text-center">
            <AuthButtonComponent path={"/"} buttonName={"Continue"} />
          </div>
        </form>
        <div className="text-center mt-2 fs-7">
          <p>
            <span className="fw-semibold">Already have an account?</span>
            &nbsp;&nbsp;<NavLink to="/signin">Sign in here.</NavLink>
          </p>
        </div>
      </div>
      <TrademarkComponent />
    </div>
  );
}
