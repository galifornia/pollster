import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AppState {
  // user
  loggedIn: boolean;
  setLoggedIn: (newState: boolean) => void;
  // available for user polls
  polls: Poll[];
  fetchPolls: () => void;
  // votes
  selectedVotes: Vote[];
  fetchVotes: (pollId: string) => void;
}

type Vote = {
  pollId: string;
};

type Poll = {};

export const useStore = create<AppState>()(
  devtools(
    persist((set) => ({
      loggedIn: false,
      setLoggedIn: (isLogged) => set(() => ({ loggedIn: isLogged })),
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
