import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function MainLayout({ children, title = 'home' }) {
  return (
    <>
      <AppBar component="nav">
        <Box  sx={{ display: 'flex' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            NEXT
          </Typography>
        </Box>
      </AppBar>
      <Head>
        <title>next | {title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
