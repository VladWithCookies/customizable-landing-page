import styled from 'styled-components';

const StyledAddress = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 32px;
  color: ${props => props.theme.colors.text6};
  font-style: normal;
  margin-top: 65px;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text6};
  }
`;

const Address = () => (
  <StyledAddress>
    Mese Selimovica 52, Banja Luka - BiH
    <a href="tel:+0038765252222">
      (00387) 65 252 222
    </a>
    <a href="mailto:info@mail.com">
      info@mail.com
    </a>
  </StyledAddress>
);

export default Address;
