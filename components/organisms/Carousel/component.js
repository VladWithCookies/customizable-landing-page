import styled from 'styled-components';

import FlatButton from 'components/atoms/FlatButton';
import ArrowLeftIcon from 'components/atoms/ArrowLeftIcon';
import ArrowRightIcon from 'components/atoms/ArrowRightIcon';
import CarouselSlide from 'components/molecules/CarouselSlide';

const StyledCarousel = styled.section`
  min-height: 840px;
  display: flex;
  background-color: ${props => props.theme.colors.gray100};
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 0 40px;
  }
`;

const Carousel = () => (
  <StyledCarousel>
    <FlatButton aria-label="Go to previous image" className="d-none d-block-lg">
      <ArrowLeftIcon />
    </FlatButton>
    <CarouselSlide />
    <FlatButton aria-label="Go to next image" className="d-none d-block-lg">
      <ArrowRightIcon />
    </FlatButton>
  </StyledCarousel>
);

export default Carousel;
