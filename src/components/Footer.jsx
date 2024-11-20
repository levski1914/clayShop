import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <section className="container-fluid p-0 bg-white h-100">
        <ul className="nav justify-content-center gap-5 py-4 hover border-bottom">
          <li className="nav-item">
            <a
              className="nav-link active fs-4"
              aria-current="page"
              href="#"
              style={{ color: "#1B2437" }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-4" href="#" style={{ color: "#1B2437" }}>
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-4" href="#" style={{ color: "#1B2437" }}>
              Blog
            </a>
          </li>
          <li className="nav-item fs-4">
            <a className="nav-link" href="#" style={{ color: "#1B2437" }}>
              Contact
            </a>
          </li>
        </ul>
        <div className="container py-5">
          <div className="row justify-content-between gap-3  hotLinks">
            <div className="col">
              <div className="logo navbar-brand d-flex gap-2">
                <img
                  src="../../public/logo.png"
                  alt="Clay logo"
                  loading="lazy"
                />
                <h4 className="m-0 ">Clay Shop</h4>
              </div>
              <div className="desc mt-4">
                <p>
                  Fashion is a popular aesthetic expression at a particular
                  time, place and in a specific context, especially in clothing,
                  footwear, lifestyle, accessories, makeup.
                </p>
              </div>
            </div>
            <div className="col">
              <h4>Hot links</h4>
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>More info</h4>
              <ul className="nav flex-column p-0">
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    How it works
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Decline rules
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Customer care</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Terms of use
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Privacy policy
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0 py-1">
                    Discount system
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container-fluid py-3"
        style={{ backgroundColor: "#EFEFF4" }}
      >
        <div className="container d-flex justify-content-between ">
          <div className="copyRights ">
            &copy; Clay Shop all rights reserved.
          </div>
          <ul className="nav d-flex gap-3">
            <li className="nav-item">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </li>
            <li className="nav-item">
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </li>
            <li className="nav-item">
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
