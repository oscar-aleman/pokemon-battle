import { useMemo } from "react";
import { Typography, Box, LinearProgress } from "@mui/material";

interface Props {
  title: string;
  value: number;
}

export default function StatusBar({ title, value }: Props) {
  
  const maxValue = 8;

  const processValue = useMemo(() => {
    return (value / maxValue) * 100;
  }, [value]);

  return (
    <Box marginBottom={1} textAlign={"left"}>
      <Typography variant="subtitle2">{title}</Typography>
      <LinearProgress
        variant="determinate"
        value={processValue}
        sx={{
            height: "10px",
            borderRadius: '5px',            
            "& .MuiLinearProgress-colorPrimary": {
              backgroundColor: "#f6ce95",
            },
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "#f0ad4e",
            },           
        }}
      />
    </Box>
  );
}
