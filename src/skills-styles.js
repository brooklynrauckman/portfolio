import { css } from "@emotion/core";

export const skills = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 5rem 0;
  position: relative;
`;

export const skillsTitle = css`
  font-family: Roboto Slab, serif;
  font-size: 2.25rem;
  color: #021156;
  @media (max-width: 820px) {
    position: relative;
    z-index: 2;
    font-size: 1.75rem;
    margin-bottom: -0.5rem;
  }
`;

export const skillText = css`
  font-size: 0.75rem;
  color: #021156;
`;

export const skillContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4rem 4rem 0;
  position: relative;
  z-index: 2;
  @media (max-width: 820px) {
    margin: 0 3rem 3rem 0;
  }
`;

export const skillIcons = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 0 5rem 4.5rem;
  @media (max-width: 820px) {
    margin: 5rem 0 5rem 3rem;
  }
`;

export const skillIcon = css`
  height: 100%;
`;

export const skillIconCircle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  height: 7rem;
  width: 7rem;
  padding: 1.5rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const squareGradient = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: 1;
  right: -12rem;
  background: linear-gradient(#f6f8fc, white);
  transform: rotate(45deg);
  border-radius: 30px;
  @media (max-width: 820px) {
    right: -17rem;
    top: 7rem;
  }
`;

export const squareGradientTwo = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: 1;
  left: -12rem;
  background: linear-gradient(white, #f6f8fc);
  transform: rotate(45deg);
  border-radius: 30px;
  @media (max-width: 820px) {
    left: -10rem;
    bottom: 12rem;
  }
`;
