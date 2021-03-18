import styled, { css, keyframes } from 'styled-components';

const animation = {
  title: css`
    opacity: 0;
    transform: translateY(var(--header-padding));
    animation: ${keyframes`
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `} 0.5s ease-in-out forwards;
  `,
  subtitle: css`
    opacity: 0;
    animation: ${keyframes`
    100% {
      opacity: 1;
    }
  `} 0.5s 0.5s ease-in-out forwards;
  `,
  buttons: css`
    opacity: 0;
    gap: calc(var(--header-padding) * 2);
    animation: ${keyframes`
    100% {
      opacity: 1;
      gap: var(--header-padding);
    }
  `} 0.5s 0.5s ease-in-out forwards;
  `,
  arrowWrapper: css`
    transform: translateY(calc(var(--header-padding) * -1));
    opacity: 0;
    animation: ${keyframes`
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `} 0.5s 1s ease-in-out forwards;
  `,
  arrow: css`
    animation: ${keyframes`    
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(.5rem);
    }
    60% {
      transform: translateY(.3rem);
    }
  `} 2s 0.65s var(--default-cubic-bezier) alternate infinite;
  `,
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: sticky;
  top: 0;
  margin-top: -100vh;
  perspective: 1px;
`;
export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: inherit;
  padding: 16vh 0 10vh;
  position: absolute;
  top: 0;
  visibility: hidden;
`;
export const Header = styled.header`
  display: grid;
  gap: 0.4rem;
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: -0.06rem;
  ${animation.title}

  @media (max-width: 638px) {
    font-size: 3.6rem;
  }
`;
export const Subtitle = styled.h2`
  font-family: 'Gotham Medium Regular', sans-serif;
  color: var(--font-grey30_color);
  letter-spacing: -0.05rem;
  ${animation.subtitle}
  a {
    color: var(--default-font_color);
    box-shadow: 0 0.1rem 0 0 var(--default-font_color);
    transition-property: color, border;
    transition: 0.25s var(--default-cubic-bezier);

    &:hover {
      color: #000;
      box-shadow: 0 0.18rem 0 0 #000;
    }
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${animation.buttons}

  @media (max-width: 598px) {
    flex-direction: column;
    width: 100%;
    padding: 0 var(--header-padding);
  }
`;
export const Button = styled.button`
  width: 25.6rem;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: none;
  border-radius: 10rem;

  &:last-child {
    background-color: hsla(0, 0%, 100%, 0.65);
    color: #171a20;
  }
  &:first-child {
    background-color: rgb(23 26 32 / 80%);
    color: #fff;
  }
  a {
    display: grid;
    place-content: center;
    width: inherit;
    height: inherit;
  }

  @media (max-width: 598px) {
    width: inherit;
  }
`;
export const ArrowWrapper = styled.div`
  --size: 1.75rem;
  --width: 0.25rem;
  pointer-events: none;
  position: absolute;
  left: calc(50% + var(--width) / 2rem);
  bottom: calc(calc(var(--header-padding) + var(--size)) * -1);
  ${animation.arrowWrapper}
`;
export const Arrow = styled.div`
  ${animation.arrow}
  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: var(--width);
    height: var(--size);
    background-color: #000;
    border-radius: 0.2rem 0.2rem 0 0;
  }
  &::before {
    transform: rotate(-45deg) translate(-235%, 0);
  }
  &::after {
    transform: rotate(45deg) translate(235%, 0);
  }
`;
