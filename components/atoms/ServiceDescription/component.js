import styled from 'styled-components';

const StyledServiceDescription = styled.p`
  color: ${props => props.theme.colors.gray300};
  margin-top: 18px;
`;

const ServiceDescription = ({ children }) => (
  <StyledServiceDescription>
    {children}
  </StyledServiceDescription>
);

export default ServiceDescription;
