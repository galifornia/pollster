import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import { User } from '../types/types';

const Home: NextPage = () => {
  const user = useStore((state) => state.user);
  const [info, setInfo] = useState<User>();

  useEffect(() => {
    if (!user) return;
    setInfo(user);
  }, [user]);

  return (
    <>
      <div className='font-bold text-3xl'>Landing page</div>
      <div>User is {JSON.stringify(info)}</div>

      <ul className='my-4 flex gap-2'>
        <li>
          <Link href='/user/register'>
            <a>Register</a>
          </Link>
        </li>
        <li>
          <Link href='/user/login'>
            <a>Log In</a>
          </Link>
        </li>
        <li>
          <Link href='/votes'>
            <a>Votes</a>
          </Link>
        </li>
        <li>
          <Link href='/polls'>
            <a>Polls</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
