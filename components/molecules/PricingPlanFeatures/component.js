import styled from 'styled-components';

import PricingPlanFeature from 'components/atoms/PricingPlanFeature';

const StyledPricingPlanFeatures = styled.ul`
  padding: 0;
  margin-top: 50px;
  margin-bottom: 50px;
  list-style-type: none;
`;

const PricingPlanFeatures = ({ features }) => (
  <StyledPricingPlanFeatures>
    {features.map(feature => (
      <PricingPlanFeature key={feature}>
        {feature}
      </PricingPlanFeature>
    ))}
  </StyledPricingPlanFeatures>
);

export default PricingPlanFeatures;
