import styled from 'styled-components';

const NavigationLink = styled.a`
  margin-left: 50px;
  padding: 10px;
  text-decoration: none;
  color: ${props => props.theme.colors.text3};

  &:hover, &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.accent1};
  }
`;

export default NavigationLink;
