import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import { MainLayout } from '../components/MainLayout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <>
      <MainLayout title='about'>
        <Box mt={15}>
          <Typography sx={{ my: 2 }}>Welcome to Next.js</Typography>
        </Box>
      </MainLayout>
    </>
  );
}