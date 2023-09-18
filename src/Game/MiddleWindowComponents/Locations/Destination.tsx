import { NearbyCaves } from "./NearbyCaves";

type Props = {
  location: string;
  resetDestination: () => void;
  addToInventory: (item: String) => void;
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
