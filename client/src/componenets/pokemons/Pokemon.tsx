import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { TPokemon } from "../../types/type";
import "./styles.css";

interface Props {
  pokemon: TPokemon;
}
export default function Pokemon({ pokemon }: Props) {
  return (
    <Card
      className="thumbnail__container"
      sx={{
        background: "linear-gradient(#a8ff98, #a8ff98)",
        boxShadow: "0 0 10px",
        borderRadius: "8px",
      }}
    >
      <Box paddingX={5}>
        <CardMedia
          component="img"
          image={pokemon.imageUrl}
          alt={pokemon.name}
        />
      </Box>
      <CardContent className="poke__name">
        <Typography variant="body1" component="h3">
          {pokemon.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
