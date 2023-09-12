import { Box, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { LootHandler } from "../Util/LootHandler";

export function LootModule() {
  const results = LootHandler("Rat");

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Tooltip title="Common" placement="top" arrow>
          <Stack
            sx={{
              minWidth: "100px",
              border: "2px solid white",
              borderRadius: "5px",
            }}
          >
            <Typography>{results.Common} / 10</Typography>
          </Stack>
        </Tooltip>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid green",
            borderRadius: "5px",
          }}
        >
          <Typography>{results.Uncommon} / 50</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid blue",
            borderRadius: "5px",
          }}
        >
          <Box width="50%" ml="25%"></Box>
          <Typography>{results.Rare} / 100</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid darkblue",
            borderRadius: "5px",
          }}
        >
          <Typography>{results.VeryRare} / 200</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid pink",
            borderRadius: "5px",
          }}
        >
          <Typography>{results.SuperRare} / 500</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid red",
            borderRadius: "5px",
          }}
        >
          <Typography>{results.UnholyRare} / 666</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid gold",
            borderRadius: "5px",
          }}
        >
          <Typography>{results.MythicRare} / 1000</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid yellow",
            borderRadius: "5px",
          }}
        >
          <Typography>{results.AncientRare} / 2000</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid orange",
            borderRadius: "5px",
          }}
        >
          <Typography>{results.LegendaryRare} / 5000</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2.4}>
        <Stack
          sx={{
            minWidth: "100px",
            border: "2px solid purple",
            borderRadius: "5px",
          }}
        >
          <Typography>{results.PrimalRare} / 10000</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
