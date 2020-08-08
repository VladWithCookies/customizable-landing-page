import styled from 'styled-components';

import NavigationLink from 'components/atoms/NavigationLink';

const StyledNavigation = styled.nav`
  text-transform: uppercase;
  font-weight: 700;
  line-height: 14px;
  font-size: 12px;
  letter-spacing: 0.6px;

  ul {
    display: flex;
    list-style-type: none;
  }
`

const Navigation = () => (
  <StyledNavigation className="d-block-lg">
    <ul>
      <li>
        <NavigationLink href="#top">
          Home
        </NavigationLink>
      </li>
      <li>
        <NavigationLink href="#about-us">
          About us
        </NavigationLink>
      </li>
      <li>
        <NavigationLink href="#portfolio">
          Portfolio
        </NavigationLink>
      </li>
      <li>
        <NavigationLink href="#our-team">
          Our Team
        </NavigationLink>
      </li>
      <li>
        <NavigationLink href="#">
          Blog
        </NavigationLink>
      </li>
      <li>
        <NavigationLink href="#contact">
          Contact
        </NavigationLink>
      </li>
    </ul>
  </StyledNavigation>
);

export default Navigation;
