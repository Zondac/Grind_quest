import { Box, Grid, Typography } from "@mui/material";

const enemyStyle = {
  width: "100%",
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
      new Audio("/Sound/hitSound.wav").play();
      break;
    case "Cow":
      new Audio("/Sound/cowHurt.wav").play();
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
            <img src="../../../Back.png" draggable={false} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={enemyStyle} onClick={() => fightEnemy("Rat")}>
            <Typography>Rat</Typography>
            <img src="../../../Rat.png" draggable={false} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={enemyStyle} onClick={() => fightEnemy("Cow")}>
            <Typography>Cow</Typography>
            <img src="../../../Cow.png" draggable={false} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
