import styled from 'styled-components';

const StyledExpertiseDescription = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-left: 30px;
  }
`;

const ExpertiseDescription = ({ children }) => (
  <StyledExpertiseDescription>
    {children}
  </StyledExpertiseDescription>
);

export default ExpertiseDescription;
