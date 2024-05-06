import { create } from "zustand";
import { TPokemon } from "../types/type";

type TBattleStore = {
  isFighting: boolean;
  winner: TPokemon | null;
  setIsFighting: (value: boolean) => void;
  setWinner: (value: TPokemon | null) => void;
};

const useBattleStore = create<TBattleStore>((set) => {
  return {
    isFighting: false,
    winner: null,
    setIsFighting: (value: boolean) =>
      set((state) => ({
        ...state,
        isFighting: value,
      })),
    setWinner: (value: TPokemon | null) =>
      set((state) => ({
        ...state,
        winner: value,
      })),
  };
});

export const useBattle = () => {
  const { isFighting, winner, setIsFighting, setWinner } = useBattleStore(
    (state) => state
  );

  return {
    isFighting,
    winner,
    setIsFighting,
    setWinner,
  } as const;
};
