import styled from 'styled-components';

import GalleryImageTitle from 'components/atoms/GalleryImageTitle';
import GalleryImageCategory from 'components/atoms/GalleryImageCategory';

const StyledGalleryImage = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  grid-row-end: span ${props => props.colSpan};

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  figcaption {
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    height: 100%;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all 0.3s;
    cursor: pointer;

    a {
      color: ${props => props.theme.colors.text9};
      text-decoration: none;
    }

    &:hover, &:focus {
      opacity: 1;
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;

const GalleryImage = ({ title, category, src, colSpan }) => (
  <StyledGalleryImage colSpan={colSpan}>
    <img src={src} alt="" />
    <figcaption>
      <a href="#">
        <GalleryImageTitle>
          {title}
        </GalleryImageTitle>
        <GalleryImageCategory>
          {category}
        </GalleryImageCategory>
      </a>
    </figcaption>
  </StyledGalleryImage>
);

export default GalleryImage;
