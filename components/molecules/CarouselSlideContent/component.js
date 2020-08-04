import styled from 'styled-components';

import CarouselSlideTitle from 'components/atoms/CarouselSlideTitle'
import CarouselSlideText from 'components/atoms/CarouselSlideText'
import CarouselSlideImage from 'components/atoms/CarouselSlideImage';

const StyledCarouselSlide = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    flex-direction: row;
  }

  > div {
    flex-grow: 1;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 20px;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      padding-left: 0;
    }
  }
`;

const CarouselSlide = ({ title, text, image }) => (
  <StyledCarouselSlide>
    <div>
      <CarouselSlideTitle>
        {title}
      </CarouselSlideTitle>
      <CarouselSlideText>
        {text}
      </CarouselSlideText>
    </div>
    <CarouselSlideImage src={image} alt="" />
  </StyledCarouselSlide>
);

export default CarouselSlide;
