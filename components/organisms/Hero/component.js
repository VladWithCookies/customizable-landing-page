import styled from 'styled-components';

import HeroTitle from 'components/atoms/HeroTitle';
import HeroSubtitle from 'components/atoms/HeroSubtitle';
import Mouse from 'components/atoms/Mouse';

const StyledHero = styled.section`
  height: 650px;
  background: url(https://picsum.photos/1440/658) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = () => (
  <StyledHero>
    <HeroTitle>
      Oxygen
    </HeroTitle>
    <HeroSubtitle>
      Starter UI kit
    </HeroSubtitle>
    <Mouse />
  </StyledHero>
);

export default Hero;
