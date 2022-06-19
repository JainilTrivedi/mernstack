import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import logo from "../Images/logo-2.png";


const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link class="navbar-brand" to={"/"} > 
          <img  class="navimg" src={logo} alt=""  /> 
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-2 ms-auto" >
            <li class="nav-item active">
              <Link class="nav-link" to={"/"}>Home</Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to={"/about"}>About us</Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to={"/contact"}>Contact</Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to={"/login"} >Login</Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to={"/signup"} >SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
