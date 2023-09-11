import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { TopBar } from "./TopBar";
import { EquipmentModule } from "./EquipmentModule";

const Item = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  color: theme.palette.text.secondary,
}));

export function GameGrid() {
  const [clicked, setClicked] = useState<number>(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={1}>
          <Stack spacing={2}>
            <Item>Stats</Item>
            <Item>fight</Item>
            <Item>Inventory</Item>
          </Stack>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              position: "relative",
              height: "44vh",
              backgroundColor: "darkslategrey",
              border: "2px solid lightgrey",
              borderRadius: "16px",
            }}
          >
            <EquipmentModule />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
