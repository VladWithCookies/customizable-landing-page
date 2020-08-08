import styled from 'styled-components';

const Heading = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 75px;
  color: ${props => props.theme.colors.text1};
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
    background-color: ${props => props.theme.colors.accent1};
    width: 60px;
    height: 4px;
  }
`;

export default Heading;
