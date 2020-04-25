import { css } from "@emotion/core";

export const intro = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 6rem 0;
  position: relative;
  z-index: 2;
  padding-top: 10rem;
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    padding-top: 7rem;
  }
`;

export const dot = css`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #ffd400;
`;

export const introContent = css`
  max-width: 450px;
  align-self: flex-start;
  height: 420px;
  padding-left: 4rem;
  position: relative;
  z-index: 2;
  @media (max-width: 820px) {
    max-width: 350px;
    padding: 0 2rem;
  }
`;

export const introTitle = css`
  font-family: Roboto Slab, serif;
  font-size: 3rem;
  color: #021156;
  @media (max-width: 820px) {
    font-size: 2.5rem;
  }
`;

export const introParagraph = css`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  color: #021156;
  line-height: 1.5rem;
`;

export const introPic = css`
  align-self: flex-end;
  margin-right: 2rem;
  max-width: 450px;
  padding-top: 3rem;
  margin-right: -2rem;
  @media (max-width: 820px) {
    padding-top: 0;
    margin-top: -4rem;
    margin-right: -5rem;
    z-index: 1;
    max-width: 375px;
  }
  @media (max-width: 550px) {
    max-width: 300px;
  }
`;

export const seeProjectsButton = css`
  padding: 0.75rem;
  margin-top: 1rem;
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

export const seeProjectsLink = css`
  outline: none;
`;

export const centeredButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 820px) {
    justify-content: start;
  }
`;

export const squareGradient = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: -1;
  left: -12rem;
  top: 12rem;
  background: linear-gradient(#f6f8fc, white);
  transform: rotate(-45deg);
  border-radius: 30px;
  @media (max-width: 820px) {
    height: 25rem;
    width: 25rem;
    left: -12rem;
    top: 7rem;
  }
`;
