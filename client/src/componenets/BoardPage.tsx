import React, { useEffect } from "react";
import { Container } from "@mui/material";

import Header from "./Header";
import Pokemons from "./pokemons";

import Slogan from "./Slogan";
import Battle from "./battle";
import { listAllPokemons } from "../apis/api";
import { usePokemons } from "../hooks/usePokemons";

export default function BoardPage() {
  const { setPokemons } = usePokemons();

  useEffect(() => {
    (async () => {
      const pokemons = await listAllPokemons();
      setPokemons([...pokemons]);
    })();
  }, [setPokemons]);

  return (
    <Container>
      <Header />
      <Pokemons />
      <Slogan />
      <Battle />
    </Container>
  );
}
