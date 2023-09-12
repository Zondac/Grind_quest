import { Typography } from "@mui/material/";
import { RegionSelect } from "./MiddleWindowComponents/RegionSelect";

type Props = {
  state: string | null;
};

export function MiddleWindow(props: Props) {
  switch (props.state) {
    case "fight":
      return <RegionSelect />;
      break;
    case "stats":
      return <Typography>stats here soon!</Typography>;
      break;
    case "inventory":
      return <Typography>inventory here soon!</Typography>;
    default:
      break;
  }
  return <Typography>{props.state}</Typography>;
}
