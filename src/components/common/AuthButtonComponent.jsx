import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthButtonComponent({path, buttonName}) {
  return (
    <>
      <NavLink to={path}>
        <button className="btn custom-background-color-darkpurple custom-color-antiquewhite custom-font-family-teko fw-bolder custom-width-92">
          {buttonName}
        </button>
      </NavLink>
    </>
  );
}
