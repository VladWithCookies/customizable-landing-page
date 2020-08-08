import styled from 'styled-components';

import Logo from 'components/atoms/Logo';
import Navigation from 'components/molecules/Navigation';
import MobileNavigation from 'components/molecules/MobileNavigation';

const StyledHeader = styled.header`
  position: relative;
  height: 90px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  font-family: 'Raleway', sans-serif;
  background-color: ${props => props.theme.colors.background1};
`;

const Header = () => (
  <StyledHeader id="top">
    <Logo />
    <Navigation />
    <MobileNavigation />
  </StyledHeader>
);

export default Header;
