import React from "react";
import { CartFill, BoxArrowInRight } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

// components
import SearchComponent from "./SearchComponent";

export default function NavbarFunctionsComponent() {
  return (
    <div className="navbar-functions me-5 d-flex align-items-center">
        <SearchComponent />
      <CartFill className="me-2" size={25} color="#3E0957" />
      <NavLink to="/signin">
        <BoxArrowInRight className="authcart-icon" size={25} color="#3E0957" />
      </NavLink>
    </div>
  );
}
