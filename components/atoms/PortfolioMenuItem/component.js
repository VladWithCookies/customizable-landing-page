import styled, { css } from 'styled-components';

const StyledPortfolioMenuItem = styled.li`
  width: fit-content;
  margin-bottom: 2px;
  transition: border-color 0.3s;
  border-bottom: 2px solid transparent;

  a {
    padding: 10px;
    color: ${props => props.theme.colors.text4};
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-left: 50px;
  }

  ${props => props.active && css`
    border-bottom: 2px solid ${props => props.theme.colors.accent1};
  `}

  &:hover, &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.accent1};
  }
`;

const PortfolioMenuItem = ({ active, children }) => (
  <StyledPortfolioMenuItem active={active}>
    <a href="#">
      {children}
    </a>
  </StyledPortfolioMenuItem>
);

export default PortfolioMenuItem;
