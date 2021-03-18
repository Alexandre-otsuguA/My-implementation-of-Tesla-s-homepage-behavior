import { FC } from 'react';
import * as Styled from './styles';

const Navigation: FC = () => (
  <Styled.Wrapper>
    <Styled.Input
      type='checkbox'
      id='hunburger'
      onChange={() => {
        document.body.toggleAttribute('menu-is-open');
      }}
    />
    <Styled.Overlay htmlFor='hunburger'>
      <Styled.Burger>
        <span></span>
        <span></span>
        <span></span>
      </Styled.Burger>
    </Styled.Overlay>
    <Styled.Menu />
  </Styled.Wrapper>
);

export default Navigation;
