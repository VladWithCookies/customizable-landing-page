import styled from 'styled-components';

import PortfolioNavigation from 'components/molecules/PortfolioNavigation';
import Gallery from 'components/molecules/Gallery';
import WideButton from 'components/atoms/WideButton';

const StyledPortfolio = styled.section`
  min-height: 1420px;
  background-color: ${props => props.theme.colors.background1};
`;

const Portfolio = () => (
  <StyledPortfolio id="portfolio">
    <PortfolioNavigation />
    <Gallery />
    <WideButton>
      View more projects
    </WideButton>
  </StyledPortfolio>
);

export default Portfolio;
