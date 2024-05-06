import { Grid, Button, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import BattlePlayer from "./BattlePlayer";
import { usePokemons } from "../../hooks/usePokemons";
import SaveIcon from "@mui/icons-material/Save";
import { useBattle } from "../../hooks/useBattle";
import { getFightingResult } from "../../apis/api";

export default function Battle() {
  const { playerLeft, playerRight } = usePokemons();
  const { isFighting, setIsFighting, setWinner } = useBattle();

  const onStartBattle = async () => {
    if (playerLeft && playerRight) {
      setIsFighting(true);
      const winner = await getFightingResult(playerLeft.id, playerRight.id);
      if (winner) {
        setWinner(playerLeft.id === winner.winnerId ? playerLeft : playerRight);
        setTimeout(()=>{
          setWinner(null)
        }, 3000)
      }

      setIsFighting(false);
    }
  };

  return (
    <Box>
      {playerLeft && playerRight && (
        <Grid container paddingY={5}>
          <Grid item md={4} xs={12} paddingRight={10}>
            <BattlePlayer player={playerLeft} side="left" />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box marginY={3}>
              {isFighting ? (
                <LoadingButton
                  loading
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="contained"
                >
                  Start Battle
                </LoadingButton>
              ) : (
                <Button variant="contained" onClick={onStartBattle}>
                  Start Battle
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item md={4} xs={12} paddingLeft={10}>
            <BattlePlayer player={playerRight} side="right" />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
