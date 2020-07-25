import styled from 'styled-components';

const StyledGalleryImageCategory = styled.p`
  margin-top: 10px;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
`;

const GalleryImageCategory = ({ children }) => (
  <StyledGalleryImageCategory>
    {children}
  </StyledGalleryImageCategory>
);

export default GalleryImageCategory;
