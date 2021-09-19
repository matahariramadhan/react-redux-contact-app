import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand ms-5">
        <h3>Contact App</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
