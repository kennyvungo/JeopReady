import { create } from "zustand";

interface CurrentScoreState {
  score: number;
  increase: (by: number) => void;
}
interface ScoreBoardState{
  status: string[][],

}
const initialBoard = {
  status: [
    ["new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new"],
  ],
};

export const useCurrentScoreStore = create<CurrentScoreState>()((set) => ({
  score: 0,
  increase: (by) => set((state) => ({ score: state.score + by })),
}));

export const useScoreBoardStore = create<ScoreBoardState>()((set) => ({
  status : initialBoard.status
  }))