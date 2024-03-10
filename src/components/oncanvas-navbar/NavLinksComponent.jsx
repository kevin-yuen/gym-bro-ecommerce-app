import React from "react";

export default function NavLinksComponent() {
  return (
    <>
      <ul className="d-flex flex-direction-row custom-color-antiquewhite list-unstyled ms-4 p-2">
        <li className="pe-5">
          <a href="#" className="oncanvas-nav-link text-decoration-none">
            All Products
          </a>
        </li>
        <li className="pe-5">
          <a href="#" className="oncanvas-nav-link text-decoration-none">
            Women Activewear
          </a>
        </li>
        <li className="pe-5">
          <a href="#" className="oncanvas-nav-link text-decoration-none">
            Men Activewear
          </a>
        </li>
        <li className="pe-5">
          <a href="#" className="oncanvas-nav-link text-decoration-none">
            Supplements
          </a>
        </li>
      </ul>
    </>
  );
}
