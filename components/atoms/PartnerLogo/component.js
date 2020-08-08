import styled, { css } from 'styled-components';

const PartnerLogo = styled.img`
  max-height: 250px;
  object-fit: cover;

  ${props => props.theme.name === 'dark' && css`
    filter: invert(1);
  `}
`;

export default PartnerLogo;
