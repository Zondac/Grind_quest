import { Typography } from "@mui/material/";
import { RegionSelect } from "./MiddleWindowComponents/RegionSelect";
import { StatsPage } from "./MiddleWindowComponents/StatsPage";
import { Stats } from "./Stats";
import { InventoryPage } from "./MiddleWindowComponents/InventoryPage";

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
      return <InventoryPage />;
    default:
      break;
  }
  return <Typography>{props.state}</Typography>;
}
