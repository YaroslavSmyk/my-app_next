import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000fff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#e9e9e9',
          flexDirection: 'colom',
          paddingTop: '80px',
          height: '100vh',
        }
      }
    }
  }
});

