import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { EquipmentModule } from "./EquipmentModule";
import { MiddleWindow } from "./MiddleWindow";
import { LootModule } from "./Modules/LootModule";
import { Stats } from "./Stats";
import { TopBar } from "./TopBar";

type Props = {
  playerStats: Stats;
  Equipment: EquipmentType;
};

export function GameGrid(props: Props) {
  const [playfield, setPlayfield] = useState<string | null>(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={1.4}>
          <Stack spacing={2}>
            <Button onClick={() => setPlayfield("stats")}>
              <img src="../StatIcon.png" />
              Stats
            </Button>
            <Button onClick={() => setPlayfield("fight")}>
              <img src="../FightIcon.png" />
              fight
            </Button>
            <Button onClick={() => setPlayfield("inventory")}>
              <img src="../InventoryIcon.png" />
              Inventory
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6.5}>
          <MiddleWindow state={playfield} stats={props.playerStats} />
        </Grid>
        <Grid item xs={4.1}>
          <Stack>
            <Box
              sx={{
                position: "relative",
                px: 2,
                pb: 2,
                backgroundColor: "darkslategrey",
                border: "2px solid lightgrey",
                borderRadius: "16px",
              }}
            >
              EQUIPMENT
              <EquipmentModule Equipment={props.Equipment} />
            </Box>
            <Box
              sx={{
                mt: 2,
                position: "relative",
                pb: 2,
                px: 2,
                backgroundColor: "darkslategrey",
                border: "2px solid lightgrey",
                borderRadius: "16px",
              }}
            >
              LOOT
              <LootModule />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
