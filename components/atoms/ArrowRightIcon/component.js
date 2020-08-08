import styled from 'styled-components';

const StyledPath = styled.path`
  fill: ${props => props.theme.colors.text4};
`;

const ArrowRightIcon = () => (
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
      d="M34.1494 17.4347L17.0735 34.594L15.4319 32.9443L29.7028 18.6037H0V16.2703H29.7051L15.4319 1.925L17.0735 0.27533L34.1494 17.4347Z"
    />
  </svg>
);

export default ArrowRightIcon;
