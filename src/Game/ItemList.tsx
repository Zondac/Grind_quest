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
  slot: "Weapon",
  description: "Beats hitting them with your fists.",
  stats: {
    Attack: 1,
    Emotion: 1,
  },
};

export const HideArmor: ItemType = {
  image: "../../Hide_armor.png",
  name: "Hide Armor",
  slot: "Chest",
  description: "The cow doesn't need this anymore.",
  stats: {
    Defense: 1,
    Toughness: 1,
    Responsibility: 1,
  },
};

export const RatskinWristbands: ItemType = {
  image: "../../Ratskin_wristbands.png",
  name: "Ratskin Wristbands",
  slot: "Wristwear",
  description: "They are a little itchy..",
  stats: {
    Defense: 1,
    Toughness: 2,
    Openness: -1,
  },
};

export const PoisonedFang: ItemType = {
  image: "../../Poisoned_fang.png",
  name: "Poisoned Fang",
  slot: "Weapon",
  description: "Be careful not to poke yourself with this one..",
  stats: {
    Attack: 3,
    Emotion: 2,
  },
};

export const RatFeather: ItemType = {
  image: "../../Rat_feather.png",
  name: "Rat Feather",
  slot: "Trinket",
  description: "Who knew rats could have feathers?",
  stats: {
    Defense: 2,
    Toughness: 1,
    Responsibility: 4,
  },
};

export const WoodenPitchfork: ItemType = {
  image: "../../Wooden_pitchfork.png",
  name: "Wooden Pitchfork",
  slot: "Weapon",
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
  slot: "Headwear",
  description: "Fit for a small king!",
  stats: {
    Defense: 7,
    Emotion: 5,
    Heart: 3,
    Magic: 1,
    Toughness: 3,
    Responsibility: 3,
  },
};

export const TheOneRing: ItemType = {
  image: "../../The_one_ring.png",
  name: "The 'One' Ring",
  slot: "Jewelry",
  description: "One's to rule them all.",
  stats: {
    Attack: 1,
    Believing: 1,
    Constitution: 1,
    Defense: 1,
    Emotion: 1,
    Forgiving: 1,
    Grit: 1,
    Heart: 1,
    Imagination: 1,
    Jovial: 1,
    Kindness: 1,
    Love: 1,
    Magic: 1,
    Navigation: 1,
    Openness: 1,
    Piety: 1,
    Questioning: 1,
    Responsibility: 1,
    Strength: 1,
    Toughness: 1,
    Utilitarianism: 1,
    Vengefulness: 1,
    Will: 1,
    Xenophobia: 1,
    Yeehaw: 1,
    Zeal: 1,
  },
};

export const GiantRatCoat: ItemType = {
  image: "../../Giant_rat_coat.png",
  name: "Giant Rat Coat",
  slot: "Chest",
  description: "Giant for a rat, but small for me.",
  stats: {
    Defense: 2,
    Toughness: 1,
    Responsibility: 3,
  },
};

export const BronzeDagger: ItemType = {
  image: "../../Bronze_dagger.png",
  name: "Bronze Dagger",
  slot: "Weapon",
  description:
    "Short but pointy, but somehow it reminds you of your childhood.",
  stats: {
    Attack: 4,
    Believing: -4,
    Emotion: 2,
    Piety: 1,
    Strength: 3,
    Magic: 1,
  },
};

export const GiantFang: ItemType = {
  image: "../../Giant_fang.png",
  name: "Giant Fang",
  slot: "Weapon",
  description: "It's bigger than expected.",
  stats: {
    Attack: 3,
    Piety: 2,
    Defense: 1,
  },
};

export const BrokenArrow: ItemType = {
  image: "../../Broken_arrow.png",
  name: "Broken Arrow",
  slot: "Weapon",
  description: "It's broken but it still has it's use..",
  stats: {
    Attack: 2,
    Defense: 2,
  },
};

export const ScrappyBelt: ItemType = {
  image: "../../Scrappy_belt.png",
  name: "Scrappy Belt",
  slot: "Belt",
  description: "Now my pants will finally stop falling down!",
  stats: {
    Defense: 1,
    Heart: 1,
    Piety: 1,
    Strength: 1,
    Imagination: 2,
  },
};

export const GoldenWatch: ItemType = {
  image: "../../Golden_watch.png",
  name: "Golden Watch",
  slot: "Wristwear",
  description: "It's a watch made from solid gold.",
  stats: {
    Defense: 1,
    Imagination: 5,
    Piety: 5,
    Magic: 2,
  },
};

export const PinkTowlette: ItemType = {
  image: "../../Pink_towlette.png",
  name: "Pink Towlette",
  slot: "Backwear",
  description: "It's slimy and well used.",
  stats: {
    Defense: 6,
    Heart: 4,
    Toughness: 2,
    Imagination: 10,
  },
};

export const BatFlesh: ItemType = {
  image: "../../Bat_flesh.png",
  name: "Bat Flesh",
  slot: "Trinket",
  description: "Looks tasty..",
  stats: {
    Defense: 1,
    Piety: 1,
    Openness: 3,
  },
};

export const BloodiedBatWings: ItemType = {
  image: "../../Bloodied_bat_wings.png",
  name: "Bloodied Bat Wings",
  slot: "Backwear",
  description: "They're wings.. from a bat.. with blood on them..",
  stats: {
    Defense: 2,
    Imagination: 3,
  },
};

export const ScrapIronShield: ItemType = {
  image: "../../Scrap_iron_shield.png",
  name: "Scrap Iron Shield",
  slot: "Off-hand",
  description: "Careful you don't catch tetanus.",
  stats: {
    Defense: 10,
    Toughness: 8,
    Heart: 5,
  },
};

export const ScrapIronLongsword: ItemType = {
  image: "../../Scrap_iron_longsword.png",
  name: "Scrap Iron Longsword",
  slot: "Weapon",
  description:
    "May give your enemies tetanus! Or break if you hit them too hard.",
  stats: {
    Attack: 13,
    Defense: 6,
    Heart: 5,
    Piety: 7,
  },
};

export const RoyalScepter: ItemType = {
  image: "../../Royal_scepter.png",
  name: "Goblin Royalty's Golden Scepter",
  slot: "Weapon",
  description: "Fit for a small queen!",
  stats: {
    Attack: 15,
    Defense: 15,
    Magic: 15,
    Imagination: 20,
  },
};

export const Underpants: ItemType = {
  image: "../../Goblin_underpants.png",
  name: "Goblin King's Underpants",
  slot: "Pants",
  description: "Reeks of sweat and mud.",
  stats: {
    Defense: 7,
    Heart: 10,
    Imagination: 10,
  },
};

export const GoblinWings: ItemType = {
  image: "../../Goblin_wings.png",
  name: "Goblin Wings",
  slot: "Backwear",
  description: "Who knew Goblins even had wings?",
  stats: {
    Defense: 13,
    Heart: 15,
    Imagination: 25,
  },
};

export const GoldenRatFur: ItemType = {
  image: "../../Golden_rat_fur.png",
  name: "Golden Rat Fur",
  slot: "Trinket",
  description: "Rat fur made from solid gold!!!",
  stats: {
    Defense: 25,
    Heart: 25,
    Imagination: 30,
  },
};
