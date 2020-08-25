import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import { Main } from "./components/MainComponent";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Auth";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5892F6",
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
