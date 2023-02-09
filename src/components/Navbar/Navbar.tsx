import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss"
function Navbar() {
  return (
    <nav className="navbar navbar-static-top navbar-expand-lg">
      <div className="container-fluid">
      <NavLink className="navbar-brand" to={"/"}>BLOG</NavLink>
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
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
        <div className="collapse navbar-collapse auto" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to={"/"}>Home</NavLink>

              
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/posts"}>Posts</NavLink>

              
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/new-post"}>New Post</NavLink>

              
            </li>
            
            
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
