import styled from 'styled-components';

import GalleryImage from 'components/molecules/GalleryImage';

const StyledGallery = styled.div`
  display: grid;
  grid-gap: 22px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Gallery = () => (
  <StyledGallery>
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={7}
      src="https://picsum.photos/900"
    />
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={4}
      src="https://picsum.photos/910"
    />
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={5}
      src="https://picsum.photos/920"
    />
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={4}
      src="https://picsum.photos/930"
    />
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={4}
      src="https://picsum.photos/940"
    />
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={8}
      src="https://picsum.photos/950"
    />
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={7}
      src="https://picsum.photos/960"
    />
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={5}
      src="https://picsum.photos/970"
    />
    <GalleryImage
      title="Ocaa cupidatat"
      category="Design"
      colSpan={4}
      src="https://picsum.photos/980"
    />
  </StyledGallery>
);

export default Gallery;
