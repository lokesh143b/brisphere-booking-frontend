import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive,setIsActive] = useState("")
  console.log(isActive)
  return (
    <div className="navbar-container">
      <h1 onClick={() => navigate("/")}>Brisphere</h1>
      <ul className="navbar-links-container">
        <li onClick={()=> setIsActive("discover")} >
          <a className={isActive === "discover"?"active":""} href="#discover">Discover</a>
        </li>
        <li onClick={()=> setIsActive("services")}>
          <a className={isActive === "services"?"active":""} href="#services">Services</a>
       </li>
        <li onClick={()=> setIsActive("about-us")}>
          <a className={isActive === "about-us"?"active":""} href="#footer">About Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
