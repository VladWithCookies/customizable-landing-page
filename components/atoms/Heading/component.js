import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 75px;
  color: ${props => props.theme.colors.gray900};
  letter-spacing: -1.65px;
  position: relative;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    white-space: nowrap;
    font-size: 60px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -14px;
    display: block;
    background-color: ${props => props.theme.colors.accent};
    width: 60px;
    height: 4px;
  }
`;

const Heading = ({ children }) => (
  <StyledHeading>
    {children}
  </StyledHeading>
);

export default Heading;
