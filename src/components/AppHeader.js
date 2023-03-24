import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from "reactstrap";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid  justify-content-md-center">
      <h2 className="header">
        Guess The Definition
      </h2>
    </div>
  );
};

export default AppHeader;
