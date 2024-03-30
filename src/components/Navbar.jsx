// import React from 'react'
import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nav-custom fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <img src={logo} alt="logo" height="62" />
            </div>

            <div className="logo-name">
              <div>Best Home Care</div>
              <div>Service, Inc.</div>
            </div>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mission">
                Our Mission
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
