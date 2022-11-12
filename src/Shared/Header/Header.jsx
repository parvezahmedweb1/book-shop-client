import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import NavMobile from "../../Pages/Others/NavMobile/NavMobile";
import "./Header.css";
const Header = () => {
  return (
    <header className="h-16 flex items-center text-white">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="" width={100} />
        {/* nav start */}
        <nav className="hidden md:hidden lg:block">
          <ul className="flex space-x-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
              >
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* nav env */}
        {/* login start */}
        <button className="bg-btnBg px-10 py-2 rounded-full font-bold hidden md:hidden lg:block">
          Sign In
        </button>
        {/* login end */}
        {/* nav mobile start */}
        <NavMobile />
        {/* nav mobile end */}
      </div>
    </header>
  );
};

export default Header;
