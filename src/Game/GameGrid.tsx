import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { TopBar } from "./TopBar";
import { EquipmentModule } from "./EquipmentModule";
import { MiddleWindow } from "./MiddleWindow";
import { ItemType } from "./Items";

const Item = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  color: theme.palette.text.secondary,
}));

const SharpRatFang: ItemType = {
  image: "../../public/Rat_tooth.png",
  name: "Sharp Rat Fang",
  description: "Beats hitting them with your fists",
  stats: {
    Attack: 1,
    Emotion: 1,
  },
};

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
          <Box
            sx={{
              position: "relative",
              height: "44vh",
              backgroundColor: "darkslategrey",
              border: "2px solid lightgrey",
              borderRadius: "16px",
            }}
          >
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
        </Grid>
      </Grid>
    </Box>
  );
}
