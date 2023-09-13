import { Box, Grid, Tooltip, Typography } from "@mui/material";
import { ItemType } from "./Items";

type Props = {
  Equipment: EquipmentsType;
};

const slotStyle = {
  pt: 0.5,
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
      {item.stats.Grit && <Typography>Grit: {item.stats.Grit}</Typography>}
      {item.stats.Heart && <Typography>Heart: {item.stats.Heart}</Typography>}
      {item.stats.Imagination && (
        <Typography>Imagination: {item.stats.Imagination}</Typography>
      )}
      {item.stats.Jovial && (
        <Typography>Jovial: {item.stats.Jovial}</Typography>
      )}
      {item.stats.Kindness && (
        <Typography>Kingliness: {item.stats.Kindness}</Typography>
      )}
      {item.stats.Love && <Typography>Love: {item.stats.Love}</Typography>}
      {item.stats.Magic && <Typography>Magic: {item.stats.Magic}</Typography>}
      {item.stats.Navigation && (
        <Typography>Navigation: {item.stats.Navigation}</Typography>
      )}
      {item.stats.Openness && (
        <Typography>Openess: {item.stats.Openness}</Typography>
      )}
      {item.stats.Piety && <Typography>Piety: {item.stats.Piety}</Typography>}
      {item.stats.Questioning && (
        <Typography>Questioning? {item.stats.Questioning}</Typography>
      )}
      {item.stats.Responsibility && (
        <Typography>Responsibility: {item.stats.Responsibility}</Typography>
      )}
      {item.stats.Strength && (
        <Typography>Strength: {item.stats.Strength}</Typography>
      )}
      {item.stats.Toughness && (
        <Typography>Toughness: {item.stats.Toughness}</Typography>
      )}
      {item.stats.Utilitarianism && (
        <Typography>Utilitarianism: {item.stats.Utilitarianism}</Typography>
      )}
      {item.stats.Vengefulness && (
        <Typography>Vengefulness: {item.stats.Vengefulness}</Typography>
      )}
      {item.stats.Will && <Typography>Will: {item.stats.Will}</Typography>}
      {item.stats.Xenophobia && (
        <Typography>Xenophobia: {item.stats.Xenophobia}</Typography>
      )}
      {item.stats.Yeehaw && (
        <Typography>Yeehaw: {item.stats.Yeehaw}</Typography>
      )}
      {item.stats.Zeal && <Typography>Zeal: {item.stats.Zeal}</Typography>}
      <Typography variant="caption">{item.description}</Typography>
    </Box>
  );
}

export function EquipmentModule(props: Props) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 10, lg: 11 }}
    >
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
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
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Trinket !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Trinket)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Trinket.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Trinket</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Headwear !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Headwear)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Headwear.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Headwear</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Eyewear !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Eyewear)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Eyewear.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Eyewear</Typography>
          )}
        </Box>
      </Grid>{" "}
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Necklace !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Necklace)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Necklace.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Necklace</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Choker !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Choker)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Choker.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Choker</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Jewelry !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Jewelry)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Jewelry.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Jewelry</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.OffHand !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.OffHand)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.OffHand.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>OffHand</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Wristwear !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Wristwear)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Wristwear.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Wristwear</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Gloves !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Gloves)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Gloves.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Gloves</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Chest !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Chest)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Chest.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Chest</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Pants !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Pants)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Pants.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Pants</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Socks !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Socks)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Socks.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Socks</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Shoes !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Shoes)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Shoes.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Shoes</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Backwear !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Backwear)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Backwear.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Backwear</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Belt !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Belt)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Belt.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Belt</Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Box sx={slotStyle}>
          {props.Equipment.Beltwear !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Beltwear)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Beltwear.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Beltwear</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
