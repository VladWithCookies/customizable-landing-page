import styled from 'styled-components';

const StyledMobileNavigationLink = styled.a`
  color: ${props => props.theme.colors.text3};
  text-decoration: none;
  transition: border-color 0.3s;
  border-bottom: 2px solid transparent;

  &:hover, &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.accent1};
  }
`;

const MobileNavigationLink = ({ href, onClick, children, className }) => (
  <StyledMobileNavigationLink
    href={href}
    onClick={onClick}
    className={className}
  >
    {children}
  </StyledMobileNavigationLink>
);

export default MobileNavigationLink;
