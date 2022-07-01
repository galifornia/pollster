import type { NextPage } from 'next';
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
    </>
  );
};

export default Home;
