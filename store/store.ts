import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Poll, User, Vote } from '../types/types';

interface AppState {
  // user
  user: User | null;
  setUser: (user: User) => void;
  // available for user polls
  polls: Poll[];
  fetchPolls: () => void;
  // votes
  selectedVotes: Vote[];
  fetchVotes: (pollId: string) => void;
}

export const useStore = create<AppState>()(
  devtools(
    persist((set) => ({
      user: null,
      setUser: (user) => set(() => ({ user: user })),
      polls: [],
      fetchPolls: async () => {
        const response = await fetch('http://localhost:3003/polls');
        const polls: Poll[] = await response.json();
        set({ polls: polls });
      },
      selectedVotes: [],
      fetchVotes: async (pollId: string) => {
        const response = await fetch('http://localhost:3003/votes');
        const votes: Vote[] = await response.json();
        set({ selectedVotes: votes.filter((vote) => vote.pollId == pollId) });
      },
    }))
  )
);
