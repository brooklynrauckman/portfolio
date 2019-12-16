import React from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {

const {updateMenuToggle} = props;

  return (
    <React.Fragment>
      <div className="menu">
        <svg onClick={() => updateMenuToggle(true)}
             className="menu-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </div>
      <div className="navBar">
        <Link to="/" className="link">
          HOME
        </Link>
        <Link to="/about" className="link">
          ABOUT
        </Link>
        <Link to="/work" className="link">
          WORK
        </Link>
      </div>
    </React.Fragment>
  );
}

export default NavLinks;
