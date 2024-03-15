import { create } from "zustand";

interface CurrentScoreState {
  score: number;
  increase: (by: number) => void;
}
export const useCurrentScoreStore = create<CurrentScoreState>()((set) => ({
  score: 0,
  increase: (by) => set((state) => ({ score: state.score + by })),
}));
