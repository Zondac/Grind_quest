import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { StatHandler } from "./Game/Util/StatHandler";
import { Provider } from "react-redux";
import { store } from "./app/store";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <StatHandler />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
