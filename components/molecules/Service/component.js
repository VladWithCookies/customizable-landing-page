import styled from 'styled-components';

import ServiceTitle from 'components/atoms/ServiceTitle';
import ServiceDescription from 'components/atoms/ServiceDescription';

const StyledService = styled.div`
  display: flex;
  margin-top: 50px;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    margin-top: 0;
    margin-right: 30px;
  }
`;

const Service = ({ icon, title, text }) => (
  <StyledService>
    <div className="mr-30">
      {icon}
    </div>
    <div>
      <ServiceTitle>
        {title}
      </ServiceTitle>
      <ServiceDescription>
        {text}
      </ServiceDescription>
    </div>
  </StyledService>
);

export default Service;
