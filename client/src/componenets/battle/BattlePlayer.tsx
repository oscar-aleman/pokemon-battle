import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { TPokemon } from "../../types/type";
import StatusBar from "./StatusBar";
import RefreshIcon from "@mui/icons-material/Refresh";
import { usePokemons } from "../../hooks/usePokemons";
import { useBattle } from "../../hooks/useBattle";

interface Props {
  player: TPokemon;
  side: "left" | "right";
}

export default function BattlePlayer({ player, side }: Props) {
  const { playerLeft, playerRight, pokemons, setPokemonLeft, setPokemonRight } =
    usePokemons();

  const { isFighting } = useBattle();

  const onRefreshPlayer = () => {
    let _pokemons = [];
    if (side === "left") {
      _pokemons = pokemons.filter((pokemon) => pokemon.id !== playerRight?.id);
    } else {
      _pokemons = pokemons.filter((pokemon) => pokemon.id !== playerLeft?.id);
    }

    const randomIndex = Math.floor(Math.random() * _pokemons.length);
    if (side === "left") {
      setPokemonLeft(_pokemons[randomIndex]);
    } else {
      setPokemonRight(_pokemons[randomIndex]);
    }
  };
  return (
    <Card
      sx={{
        background: "linear-gradient(#a8ff98, #a8ff98)",
        boxShadow: "0 0 10px",
        borderRadius: "8px",
      }}
    >
      <Box textAlign={"right"}>
        <IconButton
          sx={{ margin: 1 }}
          disabled={isFighting}
          onClick={onRefreshPlayer}
        >
          <RefreshIcon />
        </IconButton>
      </Box>
      <Box paddingX={8}>
        <CardMedia component="img" image={player.imageUrl} alt={player.name} />
      </Box>
      <CardContent>
        <Typography
          variant="subtitle1"
          textAlign={"left"}
          sx={{ fontSize: "20px" }}
        >
          {player.name}
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <StatusBar title="HP" value={player.hp} />
        <StatusBar title="Attack" value={player.attack} />
        <StatusBar title="Defense" value={player.defense} />
        <StatusBar title="Speed" value={player.speed} />
      </CardContent>
    </Card>
  );
}
