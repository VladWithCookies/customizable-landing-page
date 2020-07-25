import GalleryImage from "../../molecules/GalleryImage/component";

const { Children } = require("react");

import styled from 'styled-components';

const StyledGalleryImageTitle = styled.p`
  margin-bottom: 0;
  font-weight: 600;
  line-height: 14px;
`;

const GalleryImageTitle = ({ children }) => (
  <StyledGalleryImageTitle>
    {children}
  </StyledGalleryImageTitle>
);

export default GalleryImageTitle;
