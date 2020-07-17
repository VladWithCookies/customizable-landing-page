const { Children } = require("react");

import styled from 'styled-components';

const StyledServicesContainer = styled.div`
  display: flex;
  padding: 0 5px;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 110px;
    flex-direction: row;
  }
`;

const ServicesContainer = ({ children }) => (
  <StyledServicesContainer>
    {children}
  </StyledServicesContainer>
);

export default ServicesContainer;
