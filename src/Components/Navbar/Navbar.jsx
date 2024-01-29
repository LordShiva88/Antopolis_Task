import { useState } from "react";
import "./Navbar.css";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import Cart from "../../assets/Shopping Cart.svg";
import Container from "../Container/Container";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Container>
      <nav>
        <div className="nav-container">
          <h1 className="logo">Taste Now</h1>
          <div className="leftContainer">
            <ul className={`navLink ${click ? "nav-menu active" : "nav-menu"}`}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
            <img src={Cart} className="cart" />
            <button className="navBtn">Sign Up</button>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HiMenu />{" "}
              </span>
            ) : (
              <span className="icon">
                <HiMenuAlt1 />
              </span>
            )}
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default NavBar;
