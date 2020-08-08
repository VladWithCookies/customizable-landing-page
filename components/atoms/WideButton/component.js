import styled from 'styled-components';

const WideButton = styled.button`
  margin-top: 50px;
  width: 100%;
  min-height: 100px;
  background-color: ${props => props.theme.colors.background6};
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  line-height: 17px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${props => props.theme.colors.text1};
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;

  &:focus, &:hover {
    background-color: ${props => props.theme.colors.background5};
  }
`;

export default WideButton;
