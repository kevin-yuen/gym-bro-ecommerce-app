import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinksComponent() {
  return (
    <>
      <ul className="d-flex flex-direction-row custom-color-antiquewhite list-unstyled ms-4 p-2">
        <li className="pe-5">
          <NavLink to="/" className="oncanvas-nav-link text-decoration-none">All Products</NavLink>
        </li>
        <li className="pe-5">
          <NavLink to="/women-activewear" className="oncanvas-nav-link text-decoration-none">Women Activewear</NavLink>
        </li>
        <li className="pe-5">
          <NavLink to="/men-activewear" className="oncanvas-nav-link text-decoration-none">Men Activewear</NavLink>
        </li>
        <li className="pe-5">
          <NavLink to="/supplements" className="oncanvas-nav-link text-decoration-none">Supplements</NavLink>
        </li>
      </ul>
    </>
  );
}
