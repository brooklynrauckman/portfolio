import { css } from "@emotion/core";

export const app = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: white;
  position: relative;

  @media (max-width: 820px) {
    overflow-x: hidden;
  }
`;

export const triangleGradient = css`
  height: 35rem;
  width: auto;
  position: absolute;
  z-index: 1;
  right: -20rem;
  top: -20rem;
`;

export const wrapper = css`
  position: relative;

  @media (max-width: 820px) {
    overflow-x: hidden;
  }
`;
