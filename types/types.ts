export type Poll = { id: string };

export type Result = {};

export type Vote = {
  id: string;
  pollId: string;
};

export type User = {
  name: string;
  id: string;
  votes: Record<string, string>; // voteId: pollId
  email: string;
  password: string;
};
