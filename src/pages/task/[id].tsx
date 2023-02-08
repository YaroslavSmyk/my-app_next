import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/MainLayout';

export default function Task(data: any) {
  const router = useRouter();
  const [post, setPost] = useState('');

  useEffect(() => {
    setPost(data.data.filter((post: any) => post.id === router.query.id));
  }, [data.data, router.query.id]);

  let output: any;
  if (!post) {
    output = <h1>Loading...</h1>;
  } else {
    output = (
      <>
        <p>{JSON.stringify(post)}</p>
      </>
    );
  }
  return (
    <MainLayout title={`task ${router.query.id}`}>
      <Link href="/about">About</Link>
      {/* <h1>{`${router.query.id}`}</h1> */}
      <div>{output}</div>
    </MainLayout>
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
const name = '1';
