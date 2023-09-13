import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ItemType } from "./Items";

export const Item = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  color: theme.palette.text.secondary,
}));

export const SharpRatFang: ItemType = {
  image: "../../Rat_tooth.png",
  name: "Sharp Rat Fang",
  description: "Beats hitting them with your fists",
  stats: {
    Attack: 1,
    Emotion: 1,
  },
};

export const HideArmor: ItemType = {
  image: "../../Hide_armor.png",
  name: "Hide Armor",
  description: "The cow doesn't need this anymore",
  stats: {
    Defense: 1,
    Toughness: 1,
    Serenity: 1,
  },
};

export const RatskinWristbands: ItemType = {
  image: "../../Ratskin_wristbands.png",
  name: "Ratskin Wristbands",
  description: "They are a little itchy..",
  stats: {
    Defense: 1,
    Toughness: 2,
    Sanity: -1,
  },
};

export const PoisonedFang: ItemType = {
  image: "../../Poisoned_fang.png",
  name: "Poisoned Fang",
  description: "Be careful not to poke yourself with this one..",
  stats: {
    Attack: 3,
    Emotion: 2,
  },
};

export const RatFeather: ItemType = {
  image: "../../Rat_feather.png",
  name: "Rat Feather",
  description: "Who knew rats could have feathers?",
  stats: {
    Defense: 2,
    Toughness: 1,
    Serenity: 4,
  },
};

export const WoodenPitchfork: ItemType = {
  image: "../../Wooden_pitchfork.png",
  name: "Wooden Pitchfork",
  description: "Just 'stick' them with the pointy end.",
  stats: {
    Attack: 2,
    Imagination: 3,
    Believing: 1,
  },
};

export const GoblinCrown: ItemType = {
  image: "../../Goblin_crown.png",
  name: "Goblin Crown",
  description: "Fit for a king!",
  stats: {
    Defense: 7,
    Emotion: 5,
    Heart: 3,
    Magic: 1,
    Toughness: 3,
    Serenity: 3,
  },
};

export const TheOneRing: ItemType = {
  image: "../../The_one_ring.png",
  name: "The 'One' Ring",
  description: "One's to rule them all.",
  stats: {
    Attack: 1,
    Believing: 1,
    Constitution: 1,
    Defense: 1,
    Emotion: 1,
    Forgiving: 1,
    Heart: 1,
    Imagination: 1,
    Magic: 1,
    Muscles: 1,
    Piety: 1,
    Sanity: 1,
    Serenity: 1,
    Toughness: 1,
  },
};
