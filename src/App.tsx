import { Box } from "@mui/material";
import "./App.css";
import { GameGrid } from "./Game/GameGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { StatHandler } from "./Game/Util/StatHandler";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <StatHandler />
    </ThemeProvider>
  );
}

export default App;
