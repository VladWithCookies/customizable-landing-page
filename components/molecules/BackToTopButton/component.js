import FlatButton from 'components/atoms/FlatButton';
import ChevronUpIcon from 'components/atoms/ChevronUpIcon';

const BackToTopButton = () => (
  <FlatButton href="#top" className="mt-55 mb-30" aria-label="Back to top">
    <ChevronUpIcon />
  </FlatButton>
);

export default BackToTopButton;
