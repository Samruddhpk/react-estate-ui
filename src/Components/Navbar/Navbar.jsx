import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>realestate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Signin</a>
        <a href="/" className="register">
          Signup
        </a>

        {/* hamburger menu - sidebar */}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpenSidebar((prev) => !prev)}
          />
        </div>
        <div className={openSidebar ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Signin</a>
          <a href="/">Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
