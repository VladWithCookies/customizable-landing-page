import styled from 'styled-components';

const VisionImage = styled.img`
  flex-grow: 1;
  object-fit: cover;
  max-height: 500px;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 50%;
    max-height: 100%;
  }
`;

export default VisionImage;
