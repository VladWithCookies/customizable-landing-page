import styled from 'styled-components';

const SocialNetworkLink = styled.a`
  padding-left: 15px;
  padding-right: 15px;
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 15px;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: ${props => props.theme.colors.text9};
`;

export default SocialNetworkLink;
