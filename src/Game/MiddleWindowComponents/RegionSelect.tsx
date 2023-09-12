import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Destination } from "./Locations/Destination";

const mapStyle = {
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

export function RegionSelect() {
  const [destination, setDestination] = useState<string>("");

  return (
    <>
      {destination === "" ? (
        <>
          <Typography variant="h5">SELECT DESTINATION</Typography>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box sx={mapStyle} onClick={() => setDestination("NearbyCaves")}>
                <Typography>Nearby Caves</Typography>
                <img src="../../../public/Nearby_Caves.png" draggable={false} />
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <Destination
          location={destination}
          resetDestination={() => setDestination("")}
        />
      )}
    </>
  );
}
