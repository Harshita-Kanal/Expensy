import React from "react";
import logo from "./logo.svg";
import { Grid } from "@material-ui/core";
import "./App.css";
import DetailsCard from "./components/Details/Details";
import useStyles from "./styles";
import ExpenseTracker from "./components/Main/Main";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1 className="headline">Expensy - Your Expense Tracker</h1>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={3}>
            <DetailsCard title="Expense" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <ExpenseTracker />
          </Grid>

          <Grid item xs={12} sm={3}>
            <DetailsCard title="Income" />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
