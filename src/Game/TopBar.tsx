import { Box, Stack, Typography } from "@mui/material";

export function TopBar() {
  return (
    <Box
      sx={{
        backgroundColor: "purple",
        height: "64px",
        textAlign: "left",
      }}
    >
      <Typography variant="h3" sx={{ p: 0.5, ml: 2 }}>
        GRIND QUEST
      </Typography>
    </Box>
  );
}
