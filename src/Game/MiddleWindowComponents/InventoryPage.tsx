import { Box, Grid, Tooltip, Typography } from "@mui/material";

import * as Items from "../ItemList";
import { ItemType } from "../Items";

type Props = {
  inventory: String[];
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
      <Typography variant="subtitle2">{item.slot}</Typography>
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

export function InventoryPage(props: Props) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      sx={{ justifyContent: "center" }}
      columns={{ xs: 4, sm: 8, md: 10, lg: 11 }}
    >
      {props.inventory.map((item, index) => {
        return (
          <Grid item xs={6} sm={4} md={3} lg={2.4}>
            {Object.values(Items).map((loopedItem, index) => {
              return loopedItem.name === item ? (
                <Box sx={slotStyle}>
                  <Tooltip
                    title={ItemTooltip(loopedItem)}
                    placement="top"
                    arrow
                  >
                    <img src={loopedItem.image} />
                  </Tooltip>
                </Box>
              ) : null;
            })}
          </Grid>
        );
      })}
    </Grid>
  );
}
