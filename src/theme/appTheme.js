import { createTheme } from '@mui/material';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#a8c7fa' },
    secondary: { main: '#d0bcff' },
    background: {
      default: '#090d19',
      paper: '#12182b',
    },
  },
  shape: { borderRadius: 24 },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h4: { fontWeight: 700 },
    h6: { fontWeight: 650 },
  },
});
