import { Typography } from "@mui/material/";
import { RegionSelect } from "./MiddleWindowComponents/RegionSelect";
import { StatsPage } from "./MiddleWindowComponents/StatsPage";
import { Stats } from "./Stats";

type Props = {
  state: string | null;
  stats: Stats;
};

export function MiddleWindow(props: Props) {
  switch (props.state) {
    case "fight":
      return <RegionSelect />;
      break;
    case "stats":
      return <StatsPage stats={props.stats} />;
      break;
    case "inventory":
      return <Typography>inventory here soon!</Typography>;
    default:
      break;
  }
  return <Typography>{props.state}</Typography>;
}
