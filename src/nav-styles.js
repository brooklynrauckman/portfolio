import { css } from "@emotion/core";

export const nav = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1.25rem 2rem;
  position: relative;
  overflow-x: hidden;
`;

export const navLinks = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 820px) {
    display: none;
  }
`;

export const navLink = css`
  padding: 0 1rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.95rem;
`;

export const menuLink = css`
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
  font-size: 0.95rem;
  padding: 0 1rem;
`;

export const menu = css`
  display: none;
  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1.5rem;
    z-index: 1;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const close = css`
  &:hover {
    cursor: pointer;
  }
`;

export const menuItems = (isActive) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  background-color: white;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
  transform: ${isActive ? "translateY(0)" : "translateY(-500px)"};
  transition: transform 0.2s ease-in-out;
`;

export const navLogo = css`
  height: 2rem;
  width: 2rem;
`;

export const hireMeButton = css`
  padding: 0.75rem;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #f6eaf8;
  color: #fa72ce;
  font-weight: bold;
  font-size: 0.75rem;
  position: relative;
  z-index: 2;
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #ffdbef;
  }
`;

export const hireMeLink = css`
  outline: none;
`;

export const mobileNavRight = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
