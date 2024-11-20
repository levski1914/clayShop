import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
        <div className="container-fluid justify-content-between">
          <div className="d-flex">
            <a
              className="navbar-brand me-2 mb-1 gap-3 d-flex align-items-center justify-content-center"
              href="#"
            >
              <img src="../../public/logo.png" alt="Clay logo" loading="lazy" />
              <h4 className="m-0">Clay Shop</h4>
            </a>
          </div>

          <ul className="navbar-nav flex-row gap-5 d-none d-md-flex">
            <li className="nav-item me-3 me-lg-1 active">
              <a className="nav-link" href="#">
                <span>
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </span>
              </a>
            </li>

            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" href="#">
                <span>
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </span>
              </a>
            </li>

            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" href="#">
                <span>
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </span>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav flex-row ">
            <li className="nav-item dropdown me-3 me-lg-1">
              <a
                data-mdb-dropdown-init
                className="nav-link  hidden-arrow"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </a>
            </li>
            <li className="nav-item dropdown me-3 me-lg-1">
              <a
                data-mdb-dropdown-init
                className="nav-link "
                href="#"
                role="button"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="nav bg-white justify-content-center gap-5 shadow py-4 hover">
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
    </>
  );
};

export default Header;
