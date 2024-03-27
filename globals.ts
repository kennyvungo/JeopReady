import { create } from "zustand";

interface CurrentScoreState {
  score: number;
  increase: (by: number) => void;
  clear: () => void;
}
interface ScoreBoardState{
  status: string[][],
  update: (by: string[][]) => void;
  doubles : string[][],
  updatedouble: (by: string[][]) => void;
}

export const initialBoard = {
  status: [
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
  ],
  double: [
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
  ],
};
 
export const useCurrentScoreStore = create<CurrentScoreState>()((set) => ({
  score: 0,
  increase: (by) => set((state) => ({ score: state.score + by })),
  clear: () => set((state) => ({score:0}))
}));

export const useScoreBoardStore = create<ScoreBoardState>()((set) => ({
  status : initialBoard.status,
  update: (by) => set((state) => ({status: by})),
  doubles: initialBoard.double,
  updatedouble: (by) => set((state)=> ({doubles: by})),
  }))