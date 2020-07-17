import styled from 'styled-components';

import Heading from 'components/atoms/Heading';

const StyledAboutUs = styled.section`
  display: flex;
  background-color: ${props => props.theme.colors.gray100};
  min-height: 500px;
  padding: 50px;
  box-sizing: border-box;
  flex-direction: column;

  h2 {
    width: 260px;
    margin-right: 135px;
    margin-bottom: 50px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 135px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

const AboutUs = () => (
  <StyledAboutUs>
    <div>
      <Heading>
        About Us
      </Heading>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium commodi totam culpa, dolorum asperiores iusto
        quidem, nesciunt hic eaque blanditiis enim, id maiores nam nobis dignissimos aliquam ad minus nisi. In, fuga
        blanditiis non cum cupiditate dolore, accusantium odio doloremque quibusdam dignissimos nemo sed nisi, similique,
        mollitia et! Autem laborum sint tenetur, earum facere veniam?
      </p>
      <p>
        Sunt fugiat veniam consectetur soluta quia ex tempora quaerat, perferendis! Itaque a praesentium saepe ex distinctio
        aliquid quis laborum sit, porro dolor odio, iste eos laboriosam dolorum maiores harum reiciendis vitae doloribus
        illum voluptatibus nobis maxime assumenda ipsam tempora fugiat. Perspiciatis quibusdam hic cum tempore.
      </p>
    </div>
  </StyledAboutUs>
);

export default AboutUs;
