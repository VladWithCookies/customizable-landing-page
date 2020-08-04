import styled from 'styled-components';

import FooterLogo from 'components/molecules/FooterLogo';
import Address from 'components/molecules/Address';
import SocialNetworks from 'components/molecules/SocialNetworks';
import BackToTopButton from 'components/molecules/BackToTopButton';

const StyledContactInfo = styled.div`
  box-sizing: border-box;
  padding-top: 110px;
  min-height: 550px;
  background-color: ${props => props.theme.colors.gray800};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInfo = () => (
  <StyledContactInfo>
    <FooterLogo />
    <SocialNetworks />
    <Address />
    <BackToTopButton />
  </StyledContactInfo>
);

export default ContactInfo;
