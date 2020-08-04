import styled from 'styled-components';

const PricingPlanLink = styled.a`
  letter-spacing: 1.2px;
  text-transform: uppercase;
  line-height: 17px;
  font-weight: 700;
  text-decoration: none;

  &:visited {
    color: ${props => props.theme.colors.gray800};
  }
`;

export default PricingPlanLink;
