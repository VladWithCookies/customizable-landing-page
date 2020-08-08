import { ThemeProvider } from 'styled-components';

import { useState, useEffect } from 'react';

import lightTheme from 'themes/light';
import darkTheme from 'themes/dark';

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(lightTheme);

  const onKeyDown = (event) => {
    if (event.keyCode === 76) setTheme(lightTheme);
    if (event.keyCode === 68) setTheme(darkTheme);
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
