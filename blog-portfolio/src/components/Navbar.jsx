import React from "react";
 import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <h1>Blogs</h1>
      <div className="navLinks">
        <Link to="/" style={{textDecoration : "none", borderRadius : "5px"}}>Home</Link>
        <Link to="/create" style={{textDecoration : "none", borderRadius : "5px"}}>Add blogs</Link>
      </div>
    </div>
  );
}

export default Navbar;
