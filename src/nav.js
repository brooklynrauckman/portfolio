import React, {useState} from "react";

const Nav = () => {

const [menuToggle, updateMenuToggle] = useState(false);

return(
  <div className="navBar">
    <h1 className="name">Brooklyn<br />Rauckman</h1>
      {menuToggle === true
      ? <nav className="nav-links">
          <svg onClick={()=> updateMenuToggle(!menuToggle)}
               className="menu-arrow" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
          <a href="#about">
            <div className="about-link">about</div>
          </a>
          <a href="#work">
            <div className="portfolio-link">portfolio</div>
          </a>
        </nav>
      : <svg onClick={()=> updateMenuToggle(!menuToggle)}
             className="menu-arrow" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
      }
  </div>
)};

export default Nav;
