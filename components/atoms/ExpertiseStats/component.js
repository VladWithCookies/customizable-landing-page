import styled from 'styled-components';

const StyledExpertiseStats = styled.div`
  min-width: none;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    min-width: 370px;
  }
`;

const ExpertiseStats = ({ children }) => (
  <StyledExpertiseStats>
    {children}
  </StyledExpertiseStats>
);

export default ExpertiseStats;
