import { css } from "@emotion/core";

export const about = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 820px) {
    padding: 2rem 2rem 0 2rem;
  }
`;

export const dot = css`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #ffd400;
`;

export const aboutContent = css`
  position: relative;
  z-index: 2;
  max-width: 450px;
`;

export const aboutTitle = css`
  font-family: Roboto Slab, serif;
  font-size: 3rem;
  color: #021156;
  @media (max-width: 820px) {
    font-size: 2rem;
    padding-top: 1rem;
  }
`;

export const aboutParagraph = css`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  color: #021156;
  line-height: 1.5rem;
`;

export const resumeButton = css`
  padding: 0.75rem;
  margin-right: 1rem;
  outline: none;
  border: none;
  border-radius: 20px;
  color: #fb72ce;
  background-color: #fff1f9;
  font-weight: bold;
  font-size: 0.75rem;
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #ffdbef;
  }
`;

export const resumeLink = css`
  outline: none;
`;

export const contactButton = css`
  padding: 0.75rem;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #fb72ce;
  color: #fffcfe;
  font-weight: bold;
  font-size: 0.75rem;
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #ff3bbf;
  }
`;

export const contactLink = css`
  outline: none;
`;

export const centeredButtons = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
`;

export const footerLogo = css`
  height: 2rem;
  width: 2rem;
`;

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6rem 0;
`;

export const squareGradient = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: 1;
  right: 17rem;
  top: 7rem;
  background: linear-gradient(#f6f8fc, white);
  transform: rotate(45deg);
  border-radius: 30px;
  @media (max-width: 820px) {
    right: -4rem;
    top: 9rem;
  }
`;
