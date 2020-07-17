import styled from 'styled-components';

const StyledExpertiseContent = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

const ExpertiseContent = ({ children }) => (
  <StyledExpertiseContent>
    {children}
  </StyledExpertiseContent>
);

export default ExpertiseContent;
