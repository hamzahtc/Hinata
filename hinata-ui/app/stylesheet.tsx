"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AB2925",
      contrastText: "black",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Define your font family
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 2, // Adjust spacing unit
});

export default theme;
