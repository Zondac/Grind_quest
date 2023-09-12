import { Typography } from "@mui/material/";

type Props = {
  state: string | null;
};

export function MiddleWindow(props: Props) {
  return <Typography>{props.state}</Typography>;
}
