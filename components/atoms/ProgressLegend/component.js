import Progress from "../../molecules/Progress/component";

import styled from 'styled-components';

const StyledProgressLegend = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    text-transform: uppercase;
  }
`;

const ProgressLegend = ({ title }) => (
  <StyledProgressLegend>
    <p>
      {title}
    </p>
  </StyledProgressLegend>
);

export default ProgressLegend
