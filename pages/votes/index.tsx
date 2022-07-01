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
    console.log({ user });

    fetch(`http://localhost:3003/votes`)
      .then((res) => res.json())
      .then((json: Vote[]) => json.filter((vote) => user?.votes[vote.id]))
      .then((votes: Vote[]) => setVotes(votes))
      .catch((e) => console.log(e));
  }, [user]);

  return (
    <>
      <div className='text-2xl font-bold'>Votes Page</div>
      <p>{JSON.stringify(votes)}</p>
    </>
  );
};

export default Votes;
