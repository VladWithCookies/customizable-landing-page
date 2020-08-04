import styled from 'styled-components';

import PartnerLogo from 'components/atoms/PartnerLogo';

const StyledPartners = styled.section`
  min-height: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Partners = () => (
  <StyledPartners>
    <PartnerLogo src="https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/ford-text-logo-black-2048x2048.png" alt="Ford logo" />
    <PartnerLogo src="https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/ford-text-logo-black-2048x2048.png" alt="Ford logo" />
    <PartnerLogo src="https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/ford-text-logo-black-2048x2048.png" alt="Ford logo" />
    <PartnerLogo src="https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/ford-text-logo-black-2048x2048.png" alt="Ford logo" />
  </StyledPartners>
);

export default Partners;
