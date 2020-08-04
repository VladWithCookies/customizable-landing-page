import styled from 'styled-components';

const PortfolioMenu = styled.ul`
  list-style-type: none;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    margin-top: 0;
  }
`;

export default PortfolioMenu;
