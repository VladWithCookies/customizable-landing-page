import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const BurgerIcon = () => {
  const theme = useContext(ThemeContext);

  return (
    <svg viewBox="0 0 100 70" width="40" height="40">
      <rect width="100" height="10" style={{ fill: theme.colors.text4 }} />
      <rect y="30" width="100" height="10" style={{ fill: theme.colors.text4 }} />
      <rect y="60" width="100" height="10" style={{ fill: theme.colors.text4 }} />
    </svg>
  );
};

export default BurgerIcon;
