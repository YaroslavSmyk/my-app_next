import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <>
      <MainLayout title="About">
        <AppBar component="nav">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: 5 }}>
            <Typography
              textTransform="uppercase"
              mr={8}
              variant="h6"
              sx={{ my: 2 }}
            >
              Next
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: 5,
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <Box  sx={{ pr: 1, display: 'flex', textTransform: "uppercase" }}>
                  <p>About</p>
                </Box>
                <Box sx={{ pr: 1, display: 'flex', textTransform: "uppercase" }}>
                  <Link href="/">Home</Link>
                </Box>
                <Box sx={{ pr: 1, display: 'flex' }}>
                  <Link href="/task/1">
                    1
                  </Link>
                </Box>
                <Box sx={{ pr: 1, display: 'flex' }}>
                  <Link href="/task/2">
                    2
                  </Link>
                </Box>
                <Box sx={{ pr: 1, display: 'flex' }}>
                  <Link href="/task/3">
                    3
                  </Link>
                </Box>
                <Box sx={{ pr: 1, display: 'flex' }}>
                  <Link href="/task/4">
                    4
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </MainLayout>
    </>
  );
}
