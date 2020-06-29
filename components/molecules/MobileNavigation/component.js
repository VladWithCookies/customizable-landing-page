import { useState } from 'react';
import styled from 'styled-components';

import FlatButton from 'components/atoms/FlatButton';
import BurgerIcon from 'components/atoms/BurgerIcon';
import CrossIcon from 'components/atoms/CrossIcon';
import MobileNavigationLink from 'components/atoms/MobileNavigationLink';

const StyledMobileNavigation = styled.nav`
  margin: 0;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  transition: transform 0.3s linear;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(${ props => props.isOpened ? '0%' : '100%' });

  ul {
    flex-grow: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const MobileNavigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onToggleMenu = () => {
    isOpened ? document.body.classList.remove('overflow-hidden') : document.body.classList.add('overflow-hidden');
    setIsOpened(!isOpened);
  }

  return (
    <>
      <FlatButton
        onClick={onToggleMenu}
        className="d-none-lg"
      >
        <BurgerIcon />
      </FlatButton>
      <div className="position-absolute d-none-lg">
        <StyledMobileNavigation isOpened={isOpened}>
          <ul>
            <li>
              <MobileNavigationLink
                href="#top"
                onClick={onToggleMenu}
              >
                Home
              </MobileNavigationLink>
            </li>
            <li>
              <MobileNavigationLink
                href="#about-us"
                onClick={onToggleMenu}
              >
                About us
              </MobileNavigationLink>
            </li>
            <li>
              <MobileNavigationLink
                href="#portfolio"
                onClick={onToggleMenu}
              >
                Portfolio
              </MobileNavigationLink>
            </li>
            <li>
              <MobileNavigationLink
                href="#our-team"
                onClick={onToggleMenu}
              >
                Our Team
              </MobileNavigationLink>
            </li>
            <li>
              <MobileNavigationLink
                href="#"
                onClick={onToggleMenu}
              >
                Blog
              </MobileNavigationLink>
            </li>
            <li>
              <MobileNavigationLink
                href="#contact"
                onClick={onToggleMenu}
              >
                Contact
              </MobileNavigationLink>
            </li>
          </ul>
          <FlatButton
            className="mb-55"
            onClick={onToggleMenu}
          >
            <CrossIcon />
          </FlatButton>
        </StyledMobileNavigation>
      </div>
    </>
  );
};

export default MobileNavigation;
