import { FC } from 'react';
import * as Styled from './styles';
import LogoSVG from '../../../public/icons/logo.svg';
import Navigation from './Navigation';

const Header: FC = () => (
  <Styled.Wrapper>
    <Styled.LogoWrapper title='Tesla, Inc.'>
      Tesla
      <a href=''>
        <LogoSVG />
      </a>
    </Styled.LogoWrapper>
    <Styled.Menu role='nav'>
      <Styled.MenuItem>
        <a href=''>MODEL 1</a>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <a href=''>MODEL 2</a>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <a href=''>MODEL 3</a>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <a href=''>MODEL 4</a>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <a href=''>SOLAR ROOF</a>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <a href=''>SOLAR PANELS</a>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <Styled.Menu>
          <Styled.MenuItem>
            <a href=''>SHOP</a>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <a href=''>YOUR ACCOUNT</a>
          </Styled.MenuItem>
        </Styled.Menu>
      </Styled.MenuItem>
    </Styled.Menu>
    <Navigation />
  </Styled.Wrapper>
);

export default Header;
