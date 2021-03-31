import React from "react";
import logo from "./images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";
console.log(sublinks);
const Navbar = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    openSidebar,
    openSubmenu,
  } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log(page);
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    console.log(center);
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((sublink, index) => {
            const { page, links } = sublink;
            return (
              <li key={index} className="link-btn" onMouseOver={displaySubmenu}>
                {page}
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
