import { Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <Toolbar>
        <Typography variant="h4" noWrap component="div">
          Battle of Pokemon
        </Typography>
      </Toolbar>
    </Box>
  );
}
