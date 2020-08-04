import styled from 'styled-components';

import PricingPlanType from 'components/atoms/PricingPlanType';
import PricingPlanLink from 'components/atoms/PricingPlanLink';
import PricingPlanPrice from 'components/molecules/PricingPlanPrice';
import PricingPlanFeatures from 'components/molecules/PricingPlanFeatures';

const StyledPricingPlans = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
  padding: 25px 25px 50px 25px;
  text-align: center;
  margin-right: 0px;
  margin-bottom: 50px;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    margin-right: 30px;
    margin-bottom: 0px;
    width: 370px;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

const PricingPlan = ({ name, price, features }) => (
  <StyledPricingPlans>
    <PricingPlanType className="m-0">
      {name}
    </PricingPlanType>
    <PricingPlanPrice price={price} />
    <PricingPlanFeatures features={features} />
    <PricingPlanLink href="#">
      Choose plan
    </PricingPlanLink>
  </StyledPricingPlans>
);

export default PricingPlan;
