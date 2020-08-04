import styled from 'styled-components';

import SocialNetworkLink from 'components/atoms/SocialNetworkLink';

const StyledSocialNetworks = styled.ul`
  padding: 0;
  margin-top: 70px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  text-align: center;

  li {
    line-height: 0;
    margin-bottom: 30px;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const SocialNetworks = () => (
  <StyledSocialNetworks>
    <li>
      <SocialNetworkLink href="#">
        Facebbok
      </SocialNetworkLink>
    </li>
    <li>
      <SocialNetworkLink href="#">
        Twitter
      </SocialNetworkLink>
    </li>
    <li>
      <SocialNetworkLink href="#">
        Google+
      </SocialNetworkLink>
    </li>
    <li>
      <SocialNetworkLink href="#">
        Behance
      </SocialNetworkLink>
    </li>
    <li>
      <SocialNetworkLink href="#">
        Dribble
      </SocialNetworkLink>
    </li>
    <li>
      <SocialNetworkLink href="#">
        Instagram
      </SocialNetworkLink>
    </li>
  </StyledSocialNetworks>
);

export default SocialNetworks;
