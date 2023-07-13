import React from "react";
import "./Navbar.css";
import userimage from "../asset/user.png";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="top-bar">
      <div style={{ display: "flex" }}>
        <span>MY</span>
        <h3>Library</h3>
      </div>
      <div className="user">
        <img src={userimage} alt="" />
      </div>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/login");
          setUser("");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
