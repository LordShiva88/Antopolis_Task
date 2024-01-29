// import "./Navbar.css";
import Cart from "../../assets/Shopping Cart.svg";
// import Container from "../Container/Container";
// import { HiMenu } from "react-icons/hi";
// import { useState } from "react";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(true);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <Container>
//       <div className="navContainer">
//         <HiMenu className="menuIcon" onClick={toggleMenu} />
//         <h1 className="logo">Taste Now</h1>
//         <div className={`leftNavContainer ${showMenu ? "showMenu" : ""}`}>
//           <nav>
//             <ul className="navLink">
// <li>
//   <a href="">Home</a>
// </li>
// <li>
//   <a href="">About Us</a>
// </li>
// <li>
//   <a href="">Blog</a>
// </li>
// <li>
//   <a href="">Contact Us</a>
// </li>
//             </ul>
//           </nav>
{
  /* <img src={Cart} className="cart" />
<button className="navBtn">Sign Up</button> */
}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Navbar;

import "./NavBar.css";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import Container from "../Container/Container";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Container>
      <nav className="navbar">
        {/* <div className="nav-container">
          <h1 className="logo">Taste Now</h1>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
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
        </div> */}
        <div className="iconDiv">
          <div className="" onClick={handleClick}>
            {click ? (
              <span className="">
                <HiMenu className="icon"/>{" "}
              </span>
            ) : (
              <span className="icon">
                <HiMenuAlt1 />
              </span>
            )}
          </div>
          <h1 className="logo">Taste Now</h1>
        </div>
        <div className="leftDiv">
          <ul className="navLink">
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
      </nav>
    </Container>
  );
}

export default NavBar;
