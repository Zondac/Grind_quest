import { Box, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { ItemType } from "./Items";

type Props = {
  Equipment: EquipmentsType;
};

const slotStyle = {
  pt: 0.5,
  height: "80px",
  width: "80px",
  backgroundColor: "rgba(128, 128, 128, 0.5)",
  textAlign: "center",
  border: "2px solid lightgrey",
  borderRadius: "5px",
  userSelect: "none",
  zIndex: "2",
  "&:hover": {
    backgroundColor: "rgba(200, 200, 200, 0.75)",
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

export function EquipmentModule(props: Props) {
  return (
    <Box
      sx={{
        justifyContent: "center",
        backgroundImage: "url(/Silhouette.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        alignContent: "center",
      }}
    >
      <Stack
        direction={"row"}
        sx={{ width: "100%" }}
        justifyContent={"center"}
        spacing={2}
        mb={1}
      >
        <Box sx={slotStyle}>
          {props.Equipment.Earwear !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Earwear)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Earwear.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Earwear</Typography>
          )}
        </Box>
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
      </Stack>
      <Stack
        direction={"row"}
        sx={{ width: "100%" }}
        justifyContent={"center"}
        spacing={2}
        my={1}
      >
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
        <Box sx={slotStyle}>
          {props.Equipment.Shoulder !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Shoulder)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Shoulder.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Shoulder</Typography>
          )}
        </Box>
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
      </Stack>
      <Stack
        direction={"row"}
        sx={{ width: "100%" }}
        justifyContent={"center"}
        spacing={2}
        my={1}
      >
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
            <Typography pt={3}>Wrists</Typography>
          )}
        </Box>
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
      </Stack>
      <Stack
        direction={"row"}
        sx={{ width: "100%" }}
        justifyContent={"center"}
        spacing={2}
        my={1}
      >
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
        <Box sx={slotStyle}>
          {props.Equipment.Ring !== null ? (
            <Tooltip
              title={ItemTooltip(props.Equipment.Ring)}
              placement="top"
              arrow
            >
              <img src={props.Equipment.Ring.image} />
            </Tooltip>
          ) : (
            <Typography pt={3}>Ring</Typography>
          )}
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ width: "100%" }}
        justifyContent={"center"}
        spacing={2}
        mt={1}
      >
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
      </Stack>
    </Box>
  );
}
