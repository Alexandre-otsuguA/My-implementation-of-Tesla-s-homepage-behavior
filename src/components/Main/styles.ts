import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  width: inherit;
  position: relative;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;
export const Background = styled.div<{ color: string }>`
  width: inherit;
  height: 100vh;
  background-color: ${({ color }) => color};
  scroll-snap-align: start;
  z-index: -1;
`;
