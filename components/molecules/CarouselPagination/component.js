import styled from 'styled-components';

import CarouselPaginationButton from 'components/atoms/CarouselPaginationButton';

const StyledCarouselPagination = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  padding-bottom: 50px;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-left: 0;
    padding-bottom: 0;
  }
`;

const CarouselPagination = () => (
  <StyledCarouselPagination>
    <CarouselPaginationButton aria-label="Go to 1 image" />
    <CarouselPaginationButton aria-label="Go to 2 image" />
    <CarouselPaginationButton aria-label="Go to 3 image" active />
    <CarouselPaginationButton aria-label="Go to 4 image" />
    <CarouselPaginationButton aria-label="Go to 5 image" />
    <CarouselPaginationButton aria-label="Go to 8 image" />
  </StyledCarouselPagination>
);

export default CarouselPagination;
