import React, { useState } from "react";
import * as styles from "./nav-styles.js";

function Nav() {
  const [menu, toggleMenu] = useState(false);
  return (
    <div css={styles.nav}>
      <img css={styles.navLogo} src="/logo.svg" alt="logo" />
      <div css={styles.navLinks}>
        <a href="#projects" css={styles.navLink}>
          Projects
        </a>
        <a href="#skills" css={styles.navLink}>
          Skills
        </a>
        <a href="#about" css={styles.navLink}>
          About
        </a>
      </div>
      <div css={styles.mobileNavRight}>
        <a
          href="https://www.linkedin.com/in/brooklyn-rauckman-21514390/"
          target="blank"
          css={styles.hireMeLink}
        >
          <button css={styles.hireMeButton}>Hire Me</button>
        </a>
        <div css={styles.menu} onClick={() => toggleMenu(!menu)}>
          <img src="/menu.svg" alt="" />
        </div>
        <div css={styles.menuItems(menu)}>
          <img css={styles.navLogo} src="/logo.svg" alt="logo" />
          <div>
            <a href="#projects" css={styles.menuLink}>
              Projects
            </a>
            <a href="#skills" css={styles.menuLink}>
              Skills
            </a>
            <a href="#about" css={styles.menuLink}>
              About
            </a>
          </div>
          <img
            css={styles.close}
            src="/close.svg"
            alt=""
            onClick={() => toggleMenu(!menu)}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
