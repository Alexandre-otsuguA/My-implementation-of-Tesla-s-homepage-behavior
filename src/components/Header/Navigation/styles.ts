import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Overlay = styled.label`
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;
`;
export const Burger = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.28rem;
  position: fixed;
  top: calc(var(--header-padding) + 0.54rem / 2);
  right: var(--header-padding);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: 1;
  span {
    width: var(--burger-width);
    height: 0.2rem;
    background-color: var(--header-default-font-color);
    transition: transform 0.3s ease-in-out, opacity 0.1s 0.1s;
  }
`;
export const Menu = styled.nav`
  position: absolute;
  top: 0;
  right: -150%;
  width: 27.1rem;
  height: 100vh;
  background-color: #fff;
  transition: right 0.3s ease-in-out;
`;

export const Input = styled.input`
  display: none;
  &:checked + ${Overlay} {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0 0 0 / 25%);

    ${Burger} span {
      &:nth-child(1) {
        transform: rotate(45deg) translate(20%, 160%);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(20%, -160%);
      }
    }
    & + ${Menu} {
      right: 0;
    }
  }
`;
