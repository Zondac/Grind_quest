import { Box, Grid, Tooltip, Typography } from "@mui/material";
import { ItemType } from "./Items";

type Props = {
  Equipment: EquipmentsType;
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

function ItemTooltip(item: ItemType) {
  return (
    <Box>
      <Typography variant="h6">{item.name}</Typography>
      {item.stats.Attack && (
        <Typography>Attack: {item.stats.Attack}</Typography>
      )}
      {item.stats.Believing && (
        <Typography>Believing: {item.stats.Believing}</Typography>
      )}
      {item.stats.Constitution && (
        <Typography>Constitution: {item.stats.Constitution}</Typography>
      )}
      {item.stats.Defense && (
        <Typography>Defense: {item.stats.Defense}</Typography>
      )}
      {item.stats.Emotion && (
        <Typography>Emotion: {item.stats.Emotion}</Typography>
      )}
      {item.stats.Forgiving && (
        <Typography>Forgiving: {item.stats.Forgiving}</Typography>
      )}
      {item.stats.Heart && <Typography>Heart: {item.stats.Heart}</Typography>}
      {item.stats.Imagination && (
        <Typography>Imagination: {item.stats.Imagination}</Typography>
      )}
      {item.stats.Magic && <Typography>Magic: {item.stats.Magic}</Typography>}
      {item.stats.Muscles && (
        <Typography>Muscles: {item.stats.Muscles}</Typography>
      )}
      {item.stats.Sanity && (
        <Typography>Sanity: {item.stats.Sanity}</Typography>
      )}
      {item.stats.Serenity && (
        <Typography>Serenity: {item.stats.Serenity}</Typography>
      )}
      {item.stats.Toughness && (
        <Typography>Toughness: {item.stats.Toughness}</Typography>
      )}
      <Typography variant="caption">{item.description}</Typography>
    </Box>
  );
}

const gridWidth = 3;

export function EquipmentModule(props: Props) {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Weapon !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Weapon)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Weapon.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Weapon</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Trinket !== null ? (
            <img src={props.Equipment.Trinket.image} />
          ) : (
            <Typography pt={3}>Trinket</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Eyewear !== null ? (
            <img src={props.Equipment.Eyewear.image} />
          ) : (
            <Typography pt={3}>Eyewear</Typography>
          )}
        </Box>
      </Grid>{" "}
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Necklace !== null ? (
            <img src={props.Equipment.Necklace.image} />
          ) : (
            <Typography pt={3}>Necklace</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Choker !== null ? (
            <img src={props.Equipment.Choker.image} />
          ) : (
            <Typography pt={3}>Choker</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Jewelry !== null ? (
            <img src={props.Equipment.Jewelry.image} />
          ) : (
            <Typography pt={3}>Jewelry</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.OffHand !== null ? (
            <img src={props.Equipment.OffHand.image} />
          ) : (
            <Typography pt={3}>OffHand</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Wristwear !== null ? (
            <img src={props.Equipment.Wristwear.image} />
          ) : (
            <Typography pt={3}>Wristwear</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Gloves !== null ? (
            <img src={props.Equipment.Gloves.image} />
          ) : (
            <Typography pt={3}>Gloves</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Chest !== null ? (
            <img src={props.Equipment.Chest.image} />
          ) : (
            <Typography pt={3}>Chest</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Pants !== null ? (
            <img src={props.Equipment.Pants.image} />
          ) : (
            <Typography pt={3}>Pants</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Socks !== null ? (
            <img src={props.Equipment.Socks.image} />
          ) : (
            <Typography pt={3}>Socks</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Shoes !== null ? (
            <img src={props.Equipment.Shoes.image} />
          ) : (
            <Typography pt={3}>Shoes</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Backwear !== null ? (
            <img src={props.Equipment.Backwear.image} />
          ) : (
            <Typography pt={3}>Backwear</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Belt !== null ? (
            <img src={props.Equipment.Belt.image} />
          ) : (
            <Typography pt={3}>Belt</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={gridWidth}>
        <Box sx={slotStyle}>
          {props.Equipment.Beltwear !== null ? (
            <img src={props.Equipment.Beltwear.image} />
          ) : (
            <Typography pt={3}>Beltwear</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
