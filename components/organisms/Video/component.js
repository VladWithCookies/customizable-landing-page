import styled from 'styled-components';

import FlatButton from 'components/atoms/FlatButton';
import PlayIcon from 'components/atoms/PlayIcon';

const StyledVideo = styled.section`
  min-height: 325px;
  background: url(https://picsum.photos/1440/900) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = () => (
  <StyledVideo>
    <FlatButton aria-label="Play video">
      <PlayIcon />
    </FlatButton>
  </StyledVideo>
);

export default Video;
