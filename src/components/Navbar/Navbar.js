import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import websiteLogo from "../../assets/assets/websitelogo.png";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={websiteLogo} alt="Logo" />
      <div className="utils">
        <div>
          <Link to="/"> Home</Link>
        </div>
        <div>
          <Link to="/journey">The Journey</Link>
        </div>
        <div>
          <Link to="/team">Team</Link>
        </div>
        <div>
          <Link to="/store">Store</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="profile">
        <FiUser />
        <div style={{ fontSize: "19px" }}>GAGAN</div>
      </div>
    </div>
  );
}
