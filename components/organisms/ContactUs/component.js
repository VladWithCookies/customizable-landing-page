import styled from 'styled-components';

import Map from 'components/atoms/Map';
import Heading from 'components/atoms/Heading';
import ContactUsForm from 'components/molecules/ContactUsForm';

const StyledContactUs = styled.section`
  display: flex;
  min-height: 900px;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }

  > div {
    flex-grow: 1;
    padding: 50px;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      padding: 135px;
    }
  }
`;

const ContactUs = () => (
  <StyledContactUs id="contact">
    <div>
      <Heading>
        Get in Touch
      </Heading>
      <ContactUsForm className="mt-95" />
    </div>
    <Map src="https://www.worldeasyguides.com/wp-content/uploads/2013/01/Place-Vendome-on-Map-of-Paris.jpg" alt="1 Wall Street on the map" />
  </StyledContactUs>
);

export default ContactUs;
