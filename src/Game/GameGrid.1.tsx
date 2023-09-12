import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { TopBar } from "./TopBar";
import { EquipmentModule } from "./EquipmentModule";
import { MiddleWindow } from "./MiddleWindow";
import { Item, SharpRatFang } from "./GameGrid";
import { LootModule } from "./Modules/LootModule";

export function GameGrid() {
  const [playfield, setPlayfield] = useState<string | null>(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={1}>
          <Stack spacing={2}>
            <Item onClick={() => setPlayfield("stats")}>Stats</Item>
            <Item onClick={() => setPlayfield("fight")}>fight</Item>
            <Item onClick={() => setPlayfield("inventory")}>Inventory</Item>
          </Stack>
        </Grid>
        <Grid item xs={6.5}>
          <MiddleWindow state={playfield} />
        </Grid>
        <Grid item xs={4.5}>
          <Stack>
            <Box
              sx={{
                position: "relative",
                height: "500px",
                backgroundColor: "darkslategrey",
                border: "2px solid lightgrey",
                borderRadius: "16px",
              }}
            >
              EQUIPMENT
              <EquipmentModule
                Weapon={SharpRatFang}
                Trinket={null}
                Eyewear={null}
                Necklace={null}
                Choker={null}
                Jewelry={null}
                OffHand={null}
                Wristwear={null}
                Gloves={null}
                Chest={null}
                Pants={null}
                Socks={null}
                Shoes={null}
                Backwear={null}
                Belt={null}
                Beltwear={null}
              />
            </Box>
            <Box
              sx={{
                mt: 2,
                position: "relative",
                height: "20vh",
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
