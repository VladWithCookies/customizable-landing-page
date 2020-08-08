import styled from 'styled-components';

const StyledProgressLine = styled.div`
  height: 2px;
  background-color: ${props => props.theme.colors.background5};

  div {
    height: 100%;
    width: ${props => props.value};
    background-color: ${props => props.theme.colors.background3};

    span {
      position: relative;
      left: calc(100% - 8px);
    }
  }
`;

const ProgressLine = ({ value }) => (
  <StyledProgressLine value={value}>
    <div>
      <span>
        {value}
      </span>
    </div>
  </StyledProgressLine>
);

export default ProgressLine;
