import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.background2};
  color: ${props => props.theme.colors.text9};
  height: 45px;
  padding: 0 58px;
  border: 0;
  cursor: pointer;
  transition: all 0.3s;

  &:hover, &:focus {
    background-color: ${props => props.theme.colors.background4};
  }
`;

export default Button;
