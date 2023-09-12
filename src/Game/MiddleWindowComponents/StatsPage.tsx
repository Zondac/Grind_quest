import { Box, Stack, Typography } from "@mui/material";
import { Stats } from "../Stats";

type Props = {
  stats: Stats;
};

const statsBoxStyle = {
  width: "100%",
  height: "100%",
};

export function StatsPage(props: Props) {
  return (
    <Box sx={statsBoxStyle}>
      <Stack>
        <Typography>Attack: {props.stats.Attack}</Typography>
        <Typography>Believing: {props.stats.Believing}</Typography>
        <Typography>Constitution: {props.stats.Constitution}</Typography>
        <Typography>Defense: {props.stats.Defense}</Typography>
        <Typography>Emotion: {props.stats.Emotion}</Typography>
        <Typography>Forgiving: {props.stats.Forgiving}</Typography>
        <Typography>Heart: {props.stats.Heart}</Typography>
        <Typography>Imagination: {props.stats.Imagination}</Typography>
        <Typography>Magic: {props.stats.Magic}</Typography>
        <Typography>Muscles: {props.stats.Muscles}</Typography>
        <Typography>Piety: {props.stats.Piety}</Typography>
        <Typography>Sanity: {props.stats.Sanity}</Typography>
        <Typography>Serenity: {props.stats.Serenity}</Typography>
        <Typography>Toughness: {props.stats.Toughness}</Typography>
      </Stack>
    </Box>
  );
}
