import styled from 'styled-components';

const StyledPath = styled.path`
  fill: ${props => props.theme.colors.text4};
`;

const ArrowLeftIcon = () => (
  <svg
    focusable="false"
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <StyledPath
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.8297 18.6013H5.12463L19.3955 32.942L17.7539 34.5917L0.680359 17.4347L17.7562 0.27533L19.3979 1.925L5.12463 16.268H34.8297V18.6013Z"
    />
  </svg>
);

export default ArrowLeftIcon;