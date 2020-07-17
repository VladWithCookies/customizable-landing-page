import styled from 'styled-components';

const StyleHeroSubtitle = styled.p`
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.colors.accent};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
`;

const HeroSubtitle = ({ children }) => (
  <StyleHeroSubtitle>
    {children}
  </StyleHeroSubtitle>
);

export default HeroSubtitle;
