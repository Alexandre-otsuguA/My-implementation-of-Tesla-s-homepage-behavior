import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  padding: var(--header-padding) var(--header-padding) 0;
  position: fixed;
  top: 0;
  z-index: 1;
`;
export const LogoWrapper = styled.h1`
  position: fixed;
  top: var(--header-padding);
  left: 2rem;
  font-size: 0;
  svg {
    width: 10rem;
    fill: var(--header-default-font-color);
  }
`;
export const Menu = styled.ul`
  display: flex;
  gap: var(--header-padding);
  list-style: none;

  &:last-child {
    position: fixed;
    top: var(--header-padding-top);
    right: calc(var(--header-padding) * 2 + var(--burger-width));
  }

  @media (max-width: 1200px) {
    &:not(:last-child) > *:not(:last-child) {
      display: none;
    }
  }
  @media (max-width: 1199px) {
    & {
      display: none;
    }
  }
`;
export const MenuItem = styled.li`
  cursor: pointer;
  color: var(--header-default-font-color);
`;
