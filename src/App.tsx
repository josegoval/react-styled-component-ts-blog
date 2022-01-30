import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
