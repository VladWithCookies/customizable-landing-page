import styled from 'styled-components';

const ExpertiseContent = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

export default ExpertiseContent;
