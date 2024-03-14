import React from "react";
import { CartFill, BoxArrowInRight } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export default function AuthCartComponent() {
  return (
    <div className="auth-cart me-5">
      <CartFill className="me-2" size={25} color="#3E0957" />
      <NavLink to="/signin">
        <BoxArrowInRight className="authcart-icon" size={25} color="#3E0957" />
      </NavLink>
    </div>
  );
}
