import styled from 'styled-components';

import Quote from 'components/atoms/Quote';
import Author from 'components/atoms/Author';

const StyledTestimonial = styled.section`
  min-height: 430px;
  text-align: center;
  font-family: 'Merriweather', serif;
  font-style: italic;
  font-weight: 300;
  padding-top: 130px;
  box-sizing: border-box;
`;

const Testimonial = () => (
  <StyledTestimonial>
    <Quote>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Quote>
    <Author className="mt-40">
      Gilbert Hammond
    </Author>
  </StyledTestimonial>
);

export default Testimonial;
