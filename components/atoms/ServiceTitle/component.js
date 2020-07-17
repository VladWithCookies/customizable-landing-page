import styled from 'styled-components';

const StyledServiceTitle = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.gray825};
`;

const ServiceTitle = ({ children }) => (
  <StyledServiceTitle>
    {children}
  </StyledServiceTitle>
);

export default ServiceTitle;
