import styled from 'styled-components';

import Heading from 'components/atoms/Heading';
import PricingPlan from 'components/molecules/PricingPlan';

const StyledPricingPlans = styled.section`
  min-height: 930px;
  padding: 50px;
  background-color: ${props => props.theme.colors.background6};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 135px;
  }

  > div {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.text1};
    flex-direction: column;
    align-items: center;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      flex-direction: row;
    }
  }
`;

const PricingPlans = () => (
  <StyledPricingPlans>
    <Heading>
      Pricing Plans
    </Heading>
    <div>
      <PricingPlan
        name="Basic"
        price={29}
        features={[
          '1 Logo Design',
          '1 Website Design',
          '1 Domain Free',
          '3 Month License',
          '1 GB Storage',
        ]}
      />
      <PricingPlan
        name="Starter"
        price={50}
        features={[
          '2 Logo Design',
          '2 Website Design',
          '1 Domain Free',
          '6 Month License',
          '1 GB Storage',
        ]}
      />
      <PricingPlan
        name="Professional"
        price={70}
        features={[
          '3 Logo Design',
          '3 Website Design',
          '2 Domain Free',
          '12 Month License',
          '2 GB Storage',
        ]}
      />
    </div>
  </StyledPricingPlans>
);

export default PricingPlans;
