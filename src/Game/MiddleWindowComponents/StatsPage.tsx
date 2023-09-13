import { Box, Grid, Stack, Typography } from "@mui/material";
import { Stats } from "../Stats";

type Props = {
  stats: Stats;
};

const statsBoxStyle = {
  ml: 5,
  width: "100%",
  height: "100%",
};

const statBoxStyle = {
  backgroundColor: "maroon",
  border: "2px solid white",
  borderRadius: "5px",
  m: 1,
  p: 1,
};

const totalBoxStyle = {
  width: "90%",
  textAlign: "center",
  backgroundColor: "darkblue",
  border: "2px solid white",
  borderRadius: "5px",
  p: 1,
  mt: 2,
  ml: -1,
};

export function StatsPage(props: Props) {
  function returnTotalStats() {
    let totalval = 0;
    Object.values(props.stats).forEach((stat) => {
      totalval += stat;
    });

    return totalval;
  }
  return (
    <Box sx={statsBoxStyle}>
      <Stack sx={{ textAlign: "left" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          STATS
        </Typography>
        <Grid
          container
          sx={{ pt: 4 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Object.entries(props.stats).map((stat) => {
            return (
              <Box sx={statBoxStyle}>
                <Grid item>
                  <Typography>{stat[0]}</Typography>
                  <Typography textAlign="center">{stat[1] + " "}</Typography>
                </Grid>
              </Box>
            );
          })}
        </Grid>
        <Box sx={totalBoxStyle}>
          <Typography variant="h5">Total</Typography>
          <Typography variant="h6">{returnTotalStats()}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
