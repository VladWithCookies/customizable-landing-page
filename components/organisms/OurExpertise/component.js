import styled from 'styled-components';

import Heading from 'components/atoms/Heading';
import MarketingIcon from 'components/atoms/MarketingIcon';
import DevelopmentIcon from 'components/atoms/DevelopmentIcon';
import GraphicDesignIcon from 'components/atoms/GraphicDesignIcon';
import ServicesContainer from 'components/atoms/ServicesContainer';
import ExpertiseDescription from 'components/atoms/ExpertiseDescription';
import ExpertiseContent from 'components/atoms/ExpertiseContent';
import ExpertiseStats from 'components/atoms/ExpertiseStats';
import Progress from 'components/molecules/Progress';
import Service from 'components/molecules/Service';

const StyledOurExpertise = styled.section`
  min-height: 870px;
  box-sizing: border-box;
  padding: 50px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 135px;
  }
`;

const OurExpertise = () => (
  <StyledOurExpertise>
    <Heading>
      Our Expertise
    </Heading>
    <ExpertiseContent>
      <ExpertiseStats>
        <Progress title="Branding" value="90%" />
        <Progress title="Design" value="80%" />
        <Progress title="Development" value="85%" />
      </ExpertiseStats>
      <ExpertiseDescription>
        <p className="mt-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium commodi totam culpa, dolorum asperiores iusto
          quidem, nesciunt hic eaque blanditiis enim, id maiores nam nobis dignissimos aliquam ad minus nisi.
        </p>
        <p>
          Autem laborum sint tenetur, earum facere veniam? Sunt fugiat veniam consectetur soluta quia ex tempora quaerat,
          perferendis! Itaque a praesentium saepe ex distinctio aliquid quis
        </p>
      </ExpertiseDescription>
    </ExpertiseContent>
    <ServicesContainer>
      <Service
        title="Graphic design"
        icon={<GraphicDesignIcon />}
        text="Lorem Ipsum Proin gravida nibh vel  velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum"
      />
      <Service
        title="WEB development"
        icon={<DevelopmentIcon />}
        text="Lorem Ipsum Proin gravida nibh vel  velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum"
      />
      <Service
        title="Marketing"
        icon={<MarketingIcon />}
        text="Lorem Ipsum Proin gravida nibh vel  velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum"
      />
    </ServicesContainer>
  </StyledOurExpertise>
);

export default OurExpertise;
