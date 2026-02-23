import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

function Navbar() {
  const [count, setCount] = useState("None")

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="img-logo"/>
        <h2>KINGS Kitchen</h2>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="engage">
        <Link to="/Signup">
          <button className="login-btn">Join Premium</button>
        </Link>
        <Link to="/cart" className="cart">
          <img src={cart} alt="Cart"/>
        </Link>
    </div>


    </nav>
  );
}

export default Navbar;