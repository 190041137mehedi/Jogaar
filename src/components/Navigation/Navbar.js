import "./navbar.css";
import React, { useState } from "react";
import Authenticate from "../Authentication/Authenticate";
import NavDropdown from "./NavDropdown";
import ProfileDropdown from "./ProfileDropdown";
import { navItems } from "./NavItems";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { HiOutlineLogin } from "react-icons/hi";
import { Prevent } from "./Prevent"
import { useHistory } from "react-router-dom";
import * as data from './links.json';
import styles from './Nav.module.css';
// import { link } from 'fs';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;


const Navbar = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    console.log(modal);
    setModal(!modal);
  };

  const [dropdown, setDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const history = useHistory();

  return (
    <IconContext.Provider value={{ color: "green", size: "1rem" }}>
      <div class="navheader fixed-nav-bar">
        <div>
          <Link to="/" class="logo">
            Jogaar
          </Link>
        </div>

        <div class="section">
          <div class="navtop">
            {navItems.map((item) => {
              if (item.title === "Blog") {
                return (
                  <Link
                    to={item.path}
                    className="col navbar-link"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    {item.title}
                    {dropdown && <NavDropdown />}
                  </Link>
                );
              }
              return (
                <div
                  className="col navbar-link"
                  onClick={Prevent(() => history.push(item.path))}
                >
                  {item.title}
                </div>
              );
            })}
            {!window.localStorage.getItem("isAuthenticated") && (
              <button onClick={toggleModal} className="">
                <HiOutlineLogin class="login-icn" />
                LOGIN
              </button>
            )}
            {window.localStorage.getItem("isAuthenticated") && (
              <Link
                to="/dashboard"
                className="top-buttons profile-link"
                onMouseEnter={() => setProfileDropdown(true)}
                onMouseLeave={() => setProfileDropdown(false)}
              >
                <div className="profile-txt">
                  {JSON.parse(window.localStorage.getItem("userdata")).username}
                </div>
                {profileDropdown && <ProfileDropdown />}
              </Link>
            )}

            {modal && (
              <div className="auth-modal">
                <div onClick={toggleModal} className="overlay"></div>
                <Authenticate />
              </div>
            )}

          </div>

        </div>
      </div>
    </IconContext.Provider>
  );
};


export default Navbar;
