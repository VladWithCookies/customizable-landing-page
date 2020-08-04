import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.gray800};
  line-height: 20px;
  font-size: 14px;
  padding-bottom: 18px;

  &::placeholder {
    letter-spacing: 3.5px;
    color: ${props => props.theme.colors.gray180};
  }
`;

export default Input;
