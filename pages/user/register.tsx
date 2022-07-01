import { NextPage } from 'next';
import React from 'react';
import { useStore } from '../../store/store';

// Simple user registration page
const Register: NextPage = () => {
  const setUser = useStore((state) => state.setUser);
  const createUser = fetch('http://localhost:3003/user');

  return <div className='text-2xl font-bold'>Register Page</div>;
};

export default Register;
