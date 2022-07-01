import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { Result, Vote } from '../../types/types';

type Props = {
  result: Result;
};

// Calculate voting results of a concrete poll `id`
const Result = ({ result }: Props) => {
  return (
    <>
      <div className='text-2xl font-bold'>Result Page</div>
      <p>{JSON.stringify(result)}</p>
    </>
  );
};

export default Result;

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const pollId = params?.id || '0';
  const response = await fetch(`http://localhost:3003/votes`);
  const votes: Vote[] = await response.json();
  const result = votes.filter((vote) => vote.pollId == pollId);

  return {
    props: {
      result,
    },
  };
}
