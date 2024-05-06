import { Box, Typography, Grid } from "@mui/material";
import Pokemon from "./Pokemon";
import { usePokemons } from "../../hooks/usePokemons";
import { useEffect } from "react";

export default function Pokemons() {
  const { pokemons, setPokemonLeft, setPokemonRight } = usePokemons();

  useEffect(() => {
    const length = pokemons.length;    
    if (length > 0) {
      const leftIndex = Math.floor(Math.random() * length);
      let rightIndex = Math.floor(Math.random() * length);
      while (leftIndex === rightIndex) {
        rightIndex = Math.floor(Math.random() * length);
      }

      setPokemonLeft(pokemons[leftIndex]);
      setPokemonRight(pokemons[rightIndex]);
    }
  }, [pokemons, setPokemonLeft, setPokemonRight]);

  return (
    <Box>
      <Typography variant="h6" marginBottom={3} textAlign={"left"}>
        Select your pokemon
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        {pokemons.map((pokemon, index) => (
          <Grid item md={2} xs={4} key={index}>
            <Pokemon pokemon={pokemon}></Pokemon>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
