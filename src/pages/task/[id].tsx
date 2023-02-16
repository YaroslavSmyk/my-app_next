import Link from 'next/link';
import { MainLayout } from '../../components/MainLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Task(data: any) {
  const router = useRouter();

  const [post, setPost] = useState('');

  useEffect(() => {
    setPost(data.data.filter((post: any) => post.id === router.query.id));
  }, [data.data, router.query.id]);

  let output: any;
  if (!post) {
    output = <h1>Loading</h1>;
  } else {
    output = (
      <>
        <p>{JSON.stringify(post)}</p>
      </>
    );
  }

  return (
    <>
      <MainLayout title='task'>
        <Box mt={15}>
          <Typography component={'span'} variant={'body2'} sx={{ my: 2 }}>
            <p>ID {router.query.id}</p>
            <div>{output}</div>
          </Typography>
        </Box>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://62840a40a48bd3c40b6a3c4f.mockapi.io/api/v1/tasks'
  );
  let data = await res.json();

  return {
    props: {
      data,
    },
  };
}