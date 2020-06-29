import { ThemeProvider } from 'styled-components';

import lightTheme from 'themes/light';
import '../stylesheets/index.scss';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={lightTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
