import styled from 'styled-components'

const StyledCopyright = styled.small`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  background-color: ${props => props.theme.colors.gray835};
  color: ${props => props.theme.colors.gray175};
  font-size: 12px;
  line-height: 16px;
`;

const Copyright = () => (
  <StyledCopyright>
    @2015 Oxygen Theme
  </StyledCopyright>
);

export default Copyright;
