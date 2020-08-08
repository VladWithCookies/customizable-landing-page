import styled from 'styled-components';

const ExpertiseStats = styled.div`
  min-width: none;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    min-width: 370px;
  }
`;

export default ExpertiseStats;
