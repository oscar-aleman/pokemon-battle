import { create } from "zustand";
import { TPokemon } from "../types/type";

type TPokemonStore = {
  isFighting: boolean;
  pokemons: TPokemon[];
  playerLeft: TPokemon | null;
  playerRight: TPokemon | null;
  setIsFighting: (value: boolean) => void;
  setPokemons: (value: TPokemon[]) => void;
  setPokemonLeft: (value: TPokemon) => void;
  setPokemonRight: (value: TPokemon) => void;
};

const usePokemonsStore = create<TPokemonStore>((set) => {
  return {
    isFighting: false,
    pokemons: [],
    playerLeft: null,
    playerRight: null,
    setIsFighting: (value: boolean) =>
      set((state) => ({
        ...state,
        isFighting: value,
      })),
    setPokemons: (value: TPokemon[]) =>
      set((state) => ({
        ...state,
        pokemons: value,
      })),
    setPokemonLeft: (value: TPokemon | null) =>
      set((state) => ({
        ...state,
        playerLeft: value,
      })),
    setPokemonRight: (value: TPokemon | null) =>
      set((state) => ({
        ...state,
        playerRight: value,
      })),
  };
});

export const usePokemons = () => {
  const {
    isFighting,
    pokemons,
    playerLeft,
    playerRight,
    setIsFighting,
    setPokemons,
    setPokemonLeft,
    setPokemonRight,
  } = usePokemonsStore((state) => state);

  return {
    isFighting,
    pokemons,
    playerLeft,
    playerRight,
    setIsFighting,
    setPokemons,
    setPokemonLeft,
    setPokemonRight,
  } as const;
};
