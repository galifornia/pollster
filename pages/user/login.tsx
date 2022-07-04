import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../store/store';
import { User } from '../../types/types';

// Simple login user page
const LogIn = () => {
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  const [users, setUsers] = useState<User[]>();
  const email = 'user1@test.com';
  const password = '1234';

  useEffect(() => {
    fetch('http://localhost:3003/users/')
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((e) => console.log(e));
  }, []);

  const logIn = () => {
    if (!users) return;

    const user = users.filter((user) => user.email === email)[0];
    if (user.password === password) {
      setUser(user);
      router.push('/');
    } else {
      // router.push('/404error');
    }
  };

  return (
    <div className='text-2xl font-bold'>
      <h2>LogIn page</h2>
      <button
        className='bg-slate-600 text-white rounded-md text-bold p-2 hover:bg-slate-400 cursor-pointer hover:text-black'
        onClick={logIn}
      >
        Log In
      </button>
      <ul className='flex gap-2 my-4'>
        <li>
          <Link href='/user/register'>
            <a className='p-2 border-2 border-black rounded-xl'>Register</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='p-2 border-2 border-black rounded-xl'>Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LogIn;
