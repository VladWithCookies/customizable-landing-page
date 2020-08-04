import styled from 'styled-components';

import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Textarea from 'components/atoms/Textarea';

const StyledContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContactUsForm = ({ className }) => (
  <StyledContactUsForm className={className}>
    <Input type="text" placeholder="YOUR NAME" aria-label="Your name" />
    <Input className="mt-30" type="email" placeholder="VALID EMAIL" aria-label="Valid email" />
    <Textarea className="mt-55" rows="8" placeholder="YOUR MESSAGE" aria-label="Your message" />
    <Button className="mt-40" type="submit">
      Send message
    </Button>
  </StyledContactUsForm>
);

export default ContactUsForm;
