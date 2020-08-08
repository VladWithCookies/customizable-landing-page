import styled from 'styled-components';

import PriceCurrency from 'components/atoms/PriceCurrency';
import PriceValue from 'components/atoms/PriceValue';
import PriceDuration from 'components/atoms/PriceDuration';

const StyledPricingPlanPrice = styled.p`
  margin-top: 30px;
  height: 80px;
`;

const PricingPlanPrice = ({ price }) => (
  <StyledPricingPlanPrice>
    <PriceCurrency>
      $
    </PriceCurrency>
    <PriceValue>
      {price}
    </PriceValue>
    <PriceDuration>
      / mo
    </PriceDuration>
  </StyledPricingPlanPrice>
);

export default PricingPlanPrice;
