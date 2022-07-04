export type Poll = {
  id: string;
  name: string;
  description: string;
  participants: string[]; // userid[]
  status: boolean[]; // user status
  options: number[];
};

export type Result = {};

export type Vote = {
  id: string;
  pollId: string;
  selection: number[];
};

export type User = {
  name: string;
  id: string;
  votes: Record<string, string>; // voteId: pollId
  email: string;
  password: string;
};
