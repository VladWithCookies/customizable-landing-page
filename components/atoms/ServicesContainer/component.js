import styled from 'styled-components';

const ServicesContainer = styled.div`
  display: flex;
  padding: 0 5px;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: 110px;
    flex-direction: row;
  }
`;

export default ServicesContainer;
