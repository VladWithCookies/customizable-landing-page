import styled from 'styled-components';

import StatsValue from 'components/atoms/StatsValue';
import StatsTitle from 'components/atoms/StatsTitle';

const StyledStats = styled.section`
  min-height: 430px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 35px;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: row;
    text-align: left;
    justify-content: space-around;
  }
`;

const Stats = () => (
  <StyledStats>
    <div>
      <StatsValue>
        305
      </StatsValue>
      <StatsTitle>
        Web Designs
      </StatsTitle>
    </div>
    <div>
      <StatsValue>
        220
      </StatsValue>
      <StatsTitle>
        Logo Designs
      </StatsTitle>
    </div>
    <div>
      <StatsValue>
        52
      </StatsValue>
      <StatsTitle>
        Print Designs
      </StatsTitle>
    </div>
    <div>
      <StatsValue>
        88
      </StatsValue>
      <StatsTitle>
        Mobile Apps
      </StatsTitle>
    </div>
  </StyledStats>
);

export default Stats;
