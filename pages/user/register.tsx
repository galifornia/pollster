import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useStore } from '../../store/store';
import { User } from '../../types/types';

// Simple user registration page
const Register: NextPage = () => {
  const setUser = useStore((state) => state.setUser);

  const register = () => {
    const data: User = {
      id: '4',
      name: 'Marco Polo',
      email: 'marco.polo@gmail.com',
      password: '1234',
      votes: {},
    };

    fetch('http://localhost:3003/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  };

  return (
    <div className='text-2xl font-bold'>
      <h2>Register page</h2>
      <button
        className='bg-slate-600 text-white rounded-md text-bold p-2 hover:bg-slate-400 cursor-pointer hover:text-black'
        onClick={register}
      >
        Register
      </button>
      <ul className='flex gap-2 my-4'>
        <li>
          <Link href='/user/login'>
            <a className='p-2 border-2 border-black rounded-xl'>Log In</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='p-2 border-2 border-black rounded-xl'>Go Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Register;
