import styled from 'styled-components';

import Heading from 'components/atoms/Heading';
import PortfolioMenu from 'components/atoms/PortfolioMenu';
import PortfolioMenuItem from 'components/atoms/PortfolioMenuItem';

const StyledPortfolioNavigation = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
    padding: 135px;
  }
`;

const PortfolioNavigation = () => (
  <StyledPortfolioNavigation>
    <Heading>
      Portfolio
    </Heading>
    <PortfolioMenu>
      <PortfolioMenuItem active>
        All
      </PortfolioMenuItem>
      <PortfolioMenuItem>
        Branding
      </PortfolioMenuItem>
      <PortfolioMenuItem>
        Photography
      </PortfolioMenuItem>
      <PortfolioMenuItem>
        Illustration
      </PortfolioMenuItem>
    </PortfolioMenu>
  </StyledPortfolioNavigation>
);

export default PortfolioNavigation;
