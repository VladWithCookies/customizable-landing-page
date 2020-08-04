import styled from 'styled-components';

import Heading from 'components/atoms/Heading';
import TeamMember from 'components/molecules/TeamMember';

const StyledOurTeam = styled.section`
  min-height: 1000px;
  padding: 50px;
  box-sizing: border-box;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 135px;
  }

  div {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      flex-direction: row;
    }
  }
`;

const OurTeam = () => (
  <StyledOurTeam id="our-team">
    <Heading>
      Our Team
    </Heading>
    <div>
      <TeamMember
        name="Bernard Sparks"
        position="CEO"
        image="https://picsum.photos/500"
      />
      <TeamMember
        name="Minerva Benson"
        position="Co-Founder"
        image="https://picsum.photos/510"
      />
      <TeamMember
        name="Jared Olson"
        position="Sales"
        image="https://picsum.photos/520"
      />
    </div>
  </StyledOurTeam>
);

export default OurTeam;
