import { Box, Grid, Typography } from "@mui/material";

const enemyStyle = {
  width: "100%",
  height: "100px",
  backgroundColor: "rgba(255,255,255,0.5)",
  borderRadius: "5px",
  userSelect: "none",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "lightgrey",
  },
};

type Props = {
  resetDestination: () => void;
};

function fightEnemy(enemy: string) {
  switch (enemy) {
    case "Rat":
      break;
    default:
      break;
  }
}

export function NearbyCaves(props: Props) {
  return (
    <>
      <Typography variant="h5">NEARBY CAVES</Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box sx={enemyStyle} onClick={() => props.resetDestination()}>
            <Typography>Back</Typography>
            <img src="../../../public/Back.png" draggable={false} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={enemyStyle} onClick={() => fightEnemy("Rat")}>
            {" "}
            <Typography>Rat</Typography>
            <img src="../../../public/Rat.png" draggable={false} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}