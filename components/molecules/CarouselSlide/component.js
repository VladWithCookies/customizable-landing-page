import styled from 'styled-components';

import CarouselPagination from 'components/molecules/CarouselPagination';
import CarouselSlideContent from 'components/molecules/CarouselSlideContent';

const StyledCarouselSlide = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 100px;
  }
`;

const CarouselSlide = () => (
  <StyledCarouselSlide>
    <CarouselSlideContent
      title="Then they show that show to the people who make shows"
      text="The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s."
      image="https://picsum.photos/500"
    />
    <CarouselPagination />
  </StyledCarouselSlide>
);

export default CarouselSlide;
