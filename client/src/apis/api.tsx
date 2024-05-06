import { TPokemon, TWinnerResponse } from "../types/type";
import apiClient from "./client";

const listAllPokemons = async () => {
  try {
    const res = await apiClient.get("/pokemons");
    return res.data as TPokemon[];
  } catch (err) {
    return [];
  }
};

const getFightingResult = async (leftId: string, rightId: string) => {
  try {
    const res = await apiClient.post("/battles", { leftId, rightId });
    return res.data as TWinnerResponse;
  } catch (err) {
    return null;
  }
};

export { listAllPokemons, getFightingResult };
