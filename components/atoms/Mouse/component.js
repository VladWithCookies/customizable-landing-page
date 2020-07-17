import styled from 'styled-components';

const StyledMouse = styled.div `
  width: 26px;
  height: 43px;
  border: 2px solid white;
  border-radius: 100px;
  margin-top: 80px;
  display: flex;
  justify-content: center;

  div {
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    margin-top: 8px;
  }
`;

const Mouse = () => (
  <StyledMouse>
    <div />
  </StyledMouse>
);

export default Mouse;
