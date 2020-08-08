import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 42px;
  object-fit: contain;

  &:focus {
    border: 2px solid ${props => props.theme.colors.accent1};
  }
`;

const Logo = () => (
  <a href="/" className="lh-0">
    <StyledLogo
      src="https://vignette.wikia.nocookie.net/villains/images/f/f2/Circle-outline-512.png/revision/latest?cb=20170410162921"
      alt="Company logo"
    />
  </a>
);

export default Logo;
