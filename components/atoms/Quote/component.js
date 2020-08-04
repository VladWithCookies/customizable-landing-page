import styled from 'styled-components';

const Quote = styled.q`
  font-size: 18px;
  line-height: 36px;
  color: {props => props.theme.colors.gray900};
  max-width: 650px;
  display: inline-block;

  &:before, &:after {
    content: '';
  }
`;

export default Quote;
