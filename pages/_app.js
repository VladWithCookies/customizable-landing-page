import { ThemeProvider } from 'styled-components';

import lightTheme from 'themes/light';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={lightTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
