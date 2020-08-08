import styled from 'styled-components';

const CarouselSlideImage = styled.img`
  object-fit: cover;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 500px;
  }
`;

export default CarouselSlideImage;
