import React from "react";
import logo from "../assets/logo.jpeg";
import SearchComponent from "../components/oncanvas-navbar/SearchComponent";
import AuthCartComponent from "../components/oncanvas-navbar/AuthCartComponent";
import OffcanvasPanelComponent from "../components/offcanvas-navbar/OffcanvasPanelComponent";
import NavLinksComponent from "../components/oncanvas-navbar/NavLinksComponent";

import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout() {
  return (
    <>
      <nav className="navbar custom-background-color-antiquewhite">
        <div className="container-fluid">
          <div className="logo d-flex flex-direction-row custom-width-sm-30 custom-width-md-40 ms-5">
            <h1 className="navbar-brand fs-1 custom-font-family-teko custom-color-darkpurple">
              Gym
              <img
                src={logo}
                alt="gym-bro-logo"
                className="custom-width-15 h-80"
              />
              Bro
            </h1>
          </div>

          <SearchComponent />
          <AuthCartComponent />
          <OffcanvasPanelComponent logoImageSrc={logo} />
        </div>
      </nav>
      <div className="oncanvas-nav-link-group container-fluid custom-background-color-darkpurple">
        <NavLinksComponent />
      </div>
    </>
  );
}
