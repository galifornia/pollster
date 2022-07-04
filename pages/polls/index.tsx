import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React from 'react';
import { Poll } from '../../types/types';

type Props = {
  polls: Poll[];
};
// List all user polls
// Go to detail
// Create new poll
const Polls = ({ polls }: Props) => {
  return (
    <>
      <div className='font-bold text-3xl text-center'>All Polls</div>

      <div className='flex flex-col'>
        {polls.map((poll, i) => {
          return (
            <div
              className='grid grid-cols-[1fr_6fr_1fr] items-center gap-4 my-4 first:mt-10'
              key={i}
            >
              <h4>{poll.name}</h4>
              <p className='max-w-[70%]'>{poll.description}</p>

              <div className='flex gap-4'>
                <button>Details</button>
                <button>See results</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className='my-4 flex justify-center items-center'>
        <Link href='/'>
          <a>Go Home</a>
        </Link>
      </div>
    </>
  );
};

export default Polls;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await fetch(`http://localhost:3003/polls`);
  const polls: Poll[] = await response.json();
  return {
    props: {
      polls,
    },
  };
}
