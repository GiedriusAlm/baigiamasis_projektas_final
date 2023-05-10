import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
const theme = {
  palette: {
    default: {
      dark: '',
      main: ' rgba(255, 255, 255, 0.925)',
      light: '#ffff',
    },
    form: {
      dark: 'rgb(0, 0, 0)',
      main: 'rgba(255, 255, 255, 0.5)',
      light: 'rgba(255, 255, 255, 0.288)',
    },
    placeholder: {
      dark: '',
      main: 'rgba(255, 255, 255, 0.6)',
      light: 'rgba(255, 255, 255, 0.925)',
    },
    submit: {
      dark: '',
      main: 'rgba(255, 255, 255, 0.158)',
      light: 'rgba(255, 255, 255, 0.05)',
    },
    icons: {
      trash: 'rgb(231, 74, 74)',
      pencil: 'rgba(255, 255, 255, 0.549)',
      save: 'rgba(114, 182, 114, 0.664)',
    },
    error: {
      message: 'rgb(231, 74, 74)',
    },
    module: {
      main: 'rgb(137, 135, 135)',
    },
    overlay: {
      light: 'rgba(0, 0, 0, 0.15)',
      main: 'rgba(0, 0, 0, 0.3)',
      dark: 'rgba(0, 0, 0, 0.9)',
    },
  },
};

const ThemeProvider = ({ children }) => {
  return <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>;
};

export default ThemeProvider;
