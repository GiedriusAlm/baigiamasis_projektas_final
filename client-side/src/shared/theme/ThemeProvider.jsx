import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
const theme = {
  palette: {
    default: {
      dark: '(to right, #232526 0%, #414345 100%)',
      main: ' rgba(255, 255, 255, 0.925)',
      light: '#ffff',
    },
    input: {
      dark: '',
      main: 'rgba(255, 255, 255, 0.925)',
      light: '',
    },
    placeholder: {
      dark: '',
      main: 'rgba(255, 255, 255, 0.699)',
      light: 'rgba(255, 255, 255, 0.925)',
    },
    submit: {
      dark: '',
      main: 'rgba(255, 255, 255, 0.158)',
      light: 'rgba(95, 131, 238, 0.329)',
    },
    icons: {
      trash: 'rgb(231, 74, 74)',
      pencil: '#ffffff8c',
      save: 'rgba(114, 182, 114, 0.664)',
    },
    dark: {
      main: 'rgb(38, 37, 43)',
    },
    module: {
      main: 'rgb(137, 135, 135)',
    },
    overlay: {
      light: 'rgba(0, 0, 0, 0.15)',
      main: 'rgba(0, 0, 0, 0.3)',
      dark: 'rgba(0, 0, 0, 0.6)',
    },
  },
};

const ThemeProvider = ({ children }) => {
  return <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>;
};

export default ThemeProvider;
