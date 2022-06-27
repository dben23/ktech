import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import "./logo.style.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img
              src={require("../../images/logo-nb.png")}
              alt="logo"
              className="logo"
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="domov">Domov</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="onas">O Nás</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="smarthome">Smart Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="kontakt">Kontakt</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
