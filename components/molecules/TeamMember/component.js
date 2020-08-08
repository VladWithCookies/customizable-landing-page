import styled from 'styled-components';

import TeamMemberPhoto from 'components/atoms/TeamMemberPhoto';
import TeamMemberName from 'components/atoms/TeamMemberName';
import TeamMemberPosition from 'components/atoms/TeamMemberPosition';

const StyledTeamMember = styled.figure`
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 50px;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 0 15px;
    width: 370px;
  }
`;

const TeamMember = ({ name, position, image }) => (
  <StyledTeamMember>
    <TeamMemberPhoto src={image} alt="" />
    <figcaption>
      <TeamMemberName>
        {name}
      </TeamMemberName>
      <TeamMemberPosition>
        {position}
      </TeamMemberPosition>
    </figcaption>
  </StyledTeamMember>
);

export default TeamMember;
