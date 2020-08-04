import styled, { css } from 'styled-components';

const CarouselPaginationButton = styled.button`
  border-style: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.gray900};
  margin-right: 10px;
  opacity: 0.4;
  cursor: pointer;
  padding: 0;

  ${props => props.active && css`
    height: 10px;
    width: 10px;
    opacity: 1;
  `}
`;

export default CarouselPaginationButton;
