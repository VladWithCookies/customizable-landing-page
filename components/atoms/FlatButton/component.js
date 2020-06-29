import styled from 'styled-components';

const StyledFlatButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  width: fit-content;
`;

const FlatButton = ({ onClick, children, className }) => (
  <StyledFlatButton
    type="button"
    onClick={onClick}
    className={className}
  >
    {children}
  </StyledFlatButton>
);

export default FlatButton;
