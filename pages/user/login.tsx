import { NextPage } from 'next';
import React from 'react';
import { useStore } from '../../store/store';
import { User } from '../../types/types';

const fakeUser: User = {
  id: '1',
  name: 'Fulano',
  votes: {
    '1': '2',
  },
};
// Simple login user page
const LogIn = () => {
  const setUser = useStore((state) => state.setUser);

  return (
    <div className='text-2xl font-bold'>
      <h2>LogIn page</h2>
      <button onClick={() => setUser(fakeUser)}>Log In</button>
    </div>
  );
};

export default LogIn;
