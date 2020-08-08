import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.background4};
  line-height: 20px;
  font-size: 14px;
  resize: none;
  background-color: ${props => props.theme.colors.background1};

  &::placeholder {
    letter-spacing: 3.5px;
    color: ${props => props.theme.colors.text7};
  }
`;

export default Textarea;
