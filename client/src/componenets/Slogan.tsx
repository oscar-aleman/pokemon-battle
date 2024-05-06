import { Alert, Box } from "@mui/material";
import { useBattle } from "../hooks/useBattle";

export default function Slogan() {
  const { winner } = useBattle();
  return (
    <Box marginTop={5}>
      {winner && (
        <Alert
          variant="outlined"
          icon={false}
          sx={{ fontSize: "24px", boxShadow: "0 0 10px" }}
        >
          {winner.name} Win!
        </Alert>
      )}
    </Box>
  );
}
