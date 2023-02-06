import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Task(data: any) {
  const router = useRouter();

  const post = data.data.filter((post: any) => post.id === router.query.id);

  return (
    <>
      <Link href="/about">About</Link>
      <h1>{`${router.query.id}`}</h1>
      <div>{JSON.stringify(post)}</div>
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
const name = '1';
