import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.gray900};
  color: white;
  height: 45px;
  padding: 0 58px;
  border: 0;
  cursor: pointer;
`;

export default Button;
