import styled from 'styled-components';

import Logo from 'components/atoms/Logo';

const StyledFooterLogo = styled.div`
  display: flex;
  justify-content: center;
  min-height: 70px;
  width: 150px;
  border-bottom: 2px solid ${props => props.theme.colors.accent1};
`;

const FooterLogo = () => (
  <StyledFooterLogo>
    <Logo />
  </StyledFooterLogo>
)
export default FooterLogo;
