import styled from 'styled-components';

const Map = styled.img`
  max-width: 100%;
  object-fit: cover;
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 40%;
  }
`;

export default Map;
