import React, {useState} from "react";

const Nav = () => {

const [menuToggle, updateMenuToggle] = useState(false);

return(
  <div className="navBar">
    <div className="name">Brooklyn<br />Rauckman</div>
    <div>
      {menuToggle === true
      ? <div className="nav">
          <svg onClick={()=> updateMenuToggle(!menuToggle)}
               className="menu-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
          <a href="#about">
            <div className="link">about</div>
          </a>
          <a href="#work">
            <div className="portfolio-link">portfolio</div>
          </a>
        </div>
      : <svg onClick={()=> updateMenuToggle(!menuToggle)}
             className="menu-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
      }
    </div>
  </div>
)};

export default Nav;
