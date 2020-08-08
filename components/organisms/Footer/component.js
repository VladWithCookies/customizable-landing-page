import styled from 'styled-components';

import Copyright from 'components/atoms/Copyright';
import ContactInfo from 'components/molecules/ContactInfo';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text6};
`;

const Footer = () => (
  <StyledFooter>
    <ContactInfo />
    <Copyright />
  </StyledFooter>
);

export default Footer;
