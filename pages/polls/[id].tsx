import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';
import { Poll } from '../../types/types';

type Props = {
  poll: Poll;
};
// fetch poll detail using `id`
// Start/End poll
// Add/remove participants
// Update & Remove poll
const PollInfo = ({ poll }: Props) => {
  return (
    <>
      <div>PollInfo page</div>
      <p>{JSON.stringify(poll)}</p>
    </>
  );
};

export default PollInfo;

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const id = params?.id || '0';
  const response = await fetch(`http://localhost:3003/polls/${id}`);
  const poll: Poll = await response.json();

  return {
    props: {
      poll,
    },
  };
}
