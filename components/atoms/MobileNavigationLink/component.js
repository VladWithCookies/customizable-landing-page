import styled from 'styled-components';

const StyledMobileNavigationLink = styled.a`
  color: ${props => props.theme.colors.gray800};
  text-decoration: none;

  &:hover, &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.accent};
  }
`;

const MobileNavigationLink = ({ href, children, className }) => (
  <StyledMobileNavigationLink
    href={href}
    className={className}
  >
    {children}
  </StyledMobileNavigationLink>
);

export default MobileNavigationLink;
