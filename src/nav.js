import React, {useState} from "react";
import NavLinks from "./navlinks.js";

const Nav = () => {

const [menuToggle, updateMenuToggle] = useState(false);

return(
  <React.Fragment>
    {menuToggle === false ?
      <div className="menu">
        <svg onClick={() => updateMenuToggle(true)}
        xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </div>
      :
      <div onClick={() => updateMenuToggle(false)}>
        <NavLinks updateMenuToggle={updateMenuToggle} />
      </div>
    }
  </React.Fragment>
)};


export default Nav;
