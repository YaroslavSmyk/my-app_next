import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MainLayout } from '../components/MainLayout';

export default function About() {
  // const [ID, setId] = useState('');
  // const [post, setPost] = useState([]);
  // useEffect(() => {
  //   // let posts = JSON.stringify(data);

  //   setPost(data.data.filter((post: any) => post.id === ID));
  // }, [data.data, ID]);

  return (
    <>
      <MainLayout title="About">
        <h1>About</h1>
        <Link href="/">`Hi`</Link>
        <Link href="/task/1">
          <p>
            <button>1</button>
          </p>
        </Link>
        <Link href="/task/2">
          <p>
            <button>2</button>
          </p>
        </Link>
        <Link href="/task/3">
          <p>
            <button>3</button>
          </p>
        </Link>
        <Link href="/task/4">
          <p>
            <button>4</button>
          </p>
        </Link>
        {/* {ID !== '' && <div>{JSON.stringify(post)}</div>} */}
      </MainLayout>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(
//     'https://62840a40a48bd3c40b6a3c4f.mockapi.io/api/v1/tasks'
//   );
//   let data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
// const name = '1';
