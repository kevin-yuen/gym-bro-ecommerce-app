import React from "react";
import ImageLinkComponent from "./ImageLinkComponent";
import SignInButtonComponent from "./SignInButtonComponent";

import offcanvasAllProductsImage from "../../assets/offcanvas-all-products.jpeg";
import offcanvasMenActivewearImage from "../../assets/offcanvas-men-activewear.jpeg";
import offcanvasWomenActivewearImage from "../../assets/offcanvas-women-activewear.jpeg";
import offcanvasSupplementsImage from "../../assets/offcanvas-supplements.jpeg";

export default function OffcanvasPanelComponent({logoImageSrc}) {
  return (
    <>
      <button
        className="navbar-toggler me-5"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas-Navbar"
        aria-controls="offcanvas-Navbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvas-Navbar"
        aria-labelledby="offcanvas-NavbarLabel"
      >
        <div className="offcanvas-header custom-background-color-antiquewhite">
          <h5 className="offcanvas-title" id="offcanvas-NavbarLabel">
            <div className="logo d-flex flex-direction-row custom-width-sm-30 custom-width-md-40 ms-5">
              <h1 className="navbar-brand fs-2 custom-font-family-teko custom-color-darkpurple">
                Gym
                <img
                  src={logoImageSrc}
                  alt="gym-bro-logo"
                  className="custom-width-35 custom-height-60"
                />
                Bro
              </h1>
            </div>
          </h5>
          <button
            type="button"
            className="btn-close me-2"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ImageLinkComponent
                  imageSource={offcanvasAllProductsImage}
                  imageLabel={"all-products"}
                  imageLinkName={"All products"}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ImageLinkComponent
                  imageSource={offcanvasWomenActivewearImage}
                  imageLabel={"women-activewear"}
                  imageLinkName={"Women Activewear"}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ImageLinkComponent
                  imageSource={offcanvasMenActivewearImage}
                  imageLabel={"men-activewear"}
                  imageLinkName={"Men Activewear"}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ImageLinkComponent
                  imageSource={offcanvasSupplementsImage}
                  imageLabel={"supplements"}
                  imageLinkName={"Supplements"}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="offcanvas-footer border-top custom-background-color-antiquewhite p-3">
          <SignInButtonComponent />
        </div>
      </div>
    </>
  );
}