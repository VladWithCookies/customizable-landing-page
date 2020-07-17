import styled from 'styled-components';

const StyledVisionContent = styled.div`
  flex-grow: 1;
  padding: 50px;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 135px;
  }
`;

const VisionContent = ({ children }) => (
  <StyledVisionContent>
    {children}
  </StyledVisionContent>
);

export default VisionContent;
