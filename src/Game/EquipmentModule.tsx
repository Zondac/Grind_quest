import { Box, Grid, Typography } from "@mui/material";
import { ItemType } from "./Items";

type Props = {
  Weapon: ItemType | null;
  Trinket: ItemType | null;
  Eyewear: ItemType | null;
  Necklace: ItemType | null;
  Choker: ItemType | null;
  Jewelry: ItemType | null;
  OffHand: ItemType | null;
  Wristwear: ItemType | null;
  Gloves: ItemType | null;
  Chest: ItemType | null;
  Pants: ItemType | null;
  Socks: ItemType | null;
  Shoes: ItemType | null;
  Backwear: ItemType | null;
  Belt: ItemType | null;
  Beltwear: ItemType | null;
};

const slotStyle = {
  pt: 0.5,
  ml: 2,
  mt: 2,
  height: "80px",
  width: "80px",
  backgroundColor: "darkgrey",
  textAlign: "center",
  border: "2px solid lightgrey",
  borderRadius: "5px",
  userSelect: "none",
  zIndex: "2",
  "&:hover": {
    backgroundColor: "lightgrey",
  },
};

const gridWidth = 3;

export function EquipmentModule(props: Props) {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Weapon !== null ? (
            <img src={props.Weapon.image} />
          ) : (
            <Typography pt={3}>Weapon</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Trinket !== null ? (
            <img src={props.Trinket.image} />
          ) : (
            <Typography pt={3}>Trinket</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Eyewear !== null ? (
            <img src={props.Eyewear.image} />
          ) : (
            <Typography pt={3}>Eyewear</Typography>
          )}
        </Box>
      </Grid>{" "}
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Necklace !== null ? (
            <img src={props.Necklace.image} />
          ) : (
            <Typography pt={3}>Necklace</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Choker !== null ? (
            <img src={props.Choker.image} />
          ) : (
            <Typography pt={3}>Choker</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Jewelry !== null ? (
            <img src={props.Jewelry.image} />
          ) : (
            <Typography pt={3}>Jewelry</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.OffHand !== null ? (
            <img src={props.OffHand.image} />
          ) : (
            <Typography pt={3}>OffHand</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Wristwear !== null ? (
            <img src={props.Wristwear.image} />
          ) : (
            <Typography pt={3}>Wristwear</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Gloves !== null ? (
            <img src={props.Gloves.image} />
          ) : (
            <Typography pt={3}>Gloves</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Chest !== null ? (
            <img src={props.Chest.image} />
          ) : (
            <Typography pt={3}>Chest</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Pants !== null ? (
            <img src={props.Pants.image} />
          ) : (
            <Typography pt={3}>Pants</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Socks !== null ? (
            <img src={props.Socks.image} />
          ) : (
            <Typography pt={3}>Socks</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Shoes !== null ? (
            <img src={props.Shoes.image} />
          ) : (
            <Typography pt={3}>Shoes</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Backwear !== null ? (
            <img src={props.Backwear.image} />
          ) : (
            <Typography pt={3}>Backwear</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Belt !== null ? (
            <img src={props.Belt.image} />
          ) : (
            <Typography pt={3}>Belt</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Beltwear !== null ? (
            <img src={props.Beltwear.image} />
          ) : (
            <Typography pt={3}>Beltwear</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
