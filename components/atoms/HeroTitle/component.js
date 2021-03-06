import styled from 'styled-components';

const HeroTitle = styled.p`
  margin-top: 200px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  line-height: 120px;
  font-size: 48px;
  text-transform: uppercase;
  color: white;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 100px;
  }
`;

export default HeroTitle;
