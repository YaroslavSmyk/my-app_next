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
          justifyContent: 'space-beetwen',
          flexhDiraction: 'colum',
          paddingTop: '80px',
          height: '100vh',
          alignItems: 'center',
        }
      }
    }
  }
});

