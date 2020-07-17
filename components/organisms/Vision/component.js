import styled from 'styled-components';

import Heading from 'components/atoms/Heading';
import VisionImage from 'components/atoms/VisionImage';
import VisionContent from 'components/atoms/VisionContent';

const StyledVision = styled.section`
  display: flex;
  background: ${props => props.theme.colors.gray100};
  min-height: 840px;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

const Vision = () => (
  <StyledVision>
    <VisionImage src="https://picsum.photos/1400" alt="" />
    <VisionContent>
      <Heading>
        Let’s make
        <br />
        magic.
      </Heading>
      <p className="mt-55">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero veniam odio itaque. Molestiae aut dicta accusantium
        quod, modi ad alias enim dolor delectus iusto! Inventore tempora labore nobis doloribus optio nulla sit corrupti
        nostrum, tempore debitis pariatur minus maiores velit, autem ex eum distinctio error fugit. Itaque voluptatum quam
        veritatis fuga impedit nulla dolor.
      </p>
      <p>
        Nam dignissimos, ratione odit doloribus cum porro, aut. Ipsum nisi odio voluptatum, et, reprehenderit accusamus,
        est provident debitis dicta ullam esse assumenda, odit? Alias architecto enim pariatur libero ipsam mollitia
        maiores minus quibusdam numquam perspiciatis eveniet sit dolores eligendi inventore, ea voluptatum debitis iure,
        repellendus iste culpa! Voluptatibus quam ipsum nisi odit deserunt qui, consectetur ducimus, quis officia quaerat
        sapiente dolores, ad libero! Tenetur provident, omnis.
      </p>
    </VisionContent>
  </StyledVision>
);

export default Vision;
