import styled from 'styled-components';

const StyledFlatButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  width: fit-content;
`;

const FlatButton = ({ children, ...props }) => (
  <StyledFlatButton
    type="button"
    {...props}
  >
    {children}
  </StyledFlatButton>
);

export default FlatButton;
