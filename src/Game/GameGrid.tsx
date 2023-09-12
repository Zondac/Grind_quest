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
  image: "../../public/Rat_tooth.png",
  name: "Sharp Rat Fang",
  description: "Beats hitting them with your fists",
  stats: {
    Attack: 1,
    Emotion: 1,
  },
};
