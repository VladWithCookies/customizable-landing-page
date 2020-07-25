import styled, { css } from 'styled-components';

const StyledPortfolioMenuItem = styled.li`
  width: fit-content;
  margin-bottom: 2px;

  a {
    padding: 10px;
    color: ${props => props.theme.colors.gray825};
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-left: 50px;
  }

  ${props => props.active && css`
    margin-bottom: 2px;
    border-bottom: 2px solid ${props => props.theme.colors.accent};
  `}

  &:hover, &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.accent};
    margin-bottom: 0;
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
