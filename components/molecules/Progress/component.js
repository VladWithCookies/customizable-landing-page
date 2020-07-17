import styled from 'styled-components';

import ProgressLine from 'components/atoms/ProgressLine';
import ProgressLegend from 'components/atoms/ProgressLegend';

const StyledProgress = styled.div`
  margin-bottom: 28px;
  padding-top: 9px;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.gray850};
`;

const Progress = ({ title, value }) => (
  <StyledProgress>
    <ProgressLine value={value} />
    <ProgressLegend title={title} />
  </StyledProgress>
);

export default Progress;
