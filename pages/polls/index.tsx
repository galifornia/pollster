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
      <div>Polls page</div>
      <p>{JSON.stringify(polls)}</p>

      <div className='my-4 ml-2'>
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
