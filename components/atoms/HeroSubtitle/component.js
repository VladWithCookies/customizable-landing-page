import styled from 'styled-components';

const HeroSubtitle = styled.p`
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.colors.accent1};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
`;

export default HeroSubtitle;
