import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../store/store';
import { Vote } from '../../types/types';

type Props = {};

// lists all user voteså
const Votes = ({}: Props) => {
  const user = useStore((state) => state.user);
  const [votes, setVotes] = useState<Vote[]>();

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3003/votes`)
      .then((res) => res.json())
      .then((json: Vote[]) => json.filter((vote) => user?.votes[vote.id]))
      .then((votes: Vote[]) => setVotes(votes))
      .catch((e) => console.log(e));
  }, [user]);

  return (
    <>
      <div className='text-2xl font-bold'>Votes Page</div>

      <div className='my-4 grid grid-cols-[1fr_6fr_1fr]'>
        {votes?.map((vote, i) => (
          <div key={i} className=''>
            <h4 className='font-bold text-2xl'>{vote.pollId}</h4>
            <p className=''>{JSON.stringify(vote)}</p>
            <button>Details</button>
          </div>
        ))}
      </div>

      <div className='flex justify-center items-center m-4'>
        <Link href='/' className='my-2'>
          <a>Go Home</a>
        </Link>
      </div>
    </>
  );
};

export default Votes;
