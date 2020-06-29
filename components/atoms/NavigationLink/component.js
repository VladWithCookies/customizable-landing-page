import styled from 'styled-components';

const StyledNavigationLink = styled.a`
  margin-left: 50px;
  padding: 10px;
  text-decoration: none;
  color: ${props => props.theme.colors.gray800};

  &:hover, &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.accent};
  }
`;

const NavigationLink = ({ href, children }) => (
  <StyledNavigationLink href={href}>
    {children}
  </StyledNavigationLink>
);

export default NavigationLink;
