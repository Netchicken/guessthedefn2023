import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid  justify-content-md-center App-header ">
      <Navbar color="rgb(169, 185, 124)" light expand="sm">
        {/* <NavbarBrand
          // className="NavbarBrand"
          href="https://visioncollege.ac.nz/" >
          Guess The Definition
        </NavbarBrand> */}

        Guess The Definition

      </Navbar>
    </div>
  );
};

export default AppHeader;
