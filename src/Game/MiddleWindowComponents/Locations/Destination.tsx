import { NearbyCaves } from "./NearbyCaves";

type Props = {
  location: string;
  resetDestination: () => void;
};

export function Destination(props: Props) {
  switch (props.location) {
    case "NearbyCaves":
      return <NearbyCaves resetDestination={props.resetDestination} />;

      break;

    default:
      break;
  }
}
