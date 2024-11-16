import React, { useState, useEffect } from "react";
import Head from "next/head";
import {  CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Page(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#72448F",
      },
      secondary: {
        main: "rgb(32, 174, 142)",
        contrastText:"white"
      },
    },
    typography: {
      h1: {
        fontFamily: "'Ubuntu', sans-serif",
        fontWeight: 700,
        fontSize: 18,
      },
      h2: {
        fontFamily: "'Ubuntu', sans-serif",
        fontWeight: 700,
        fontSize: 16,
      },
      h3: {
        fontFamily: "'Ubuntu', sans-serif",
        fontWeight: 700,
        fontSize: 14,
      },
    },
    
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{`${props?.title ? props?.title : "Error"} | Kampusa`}</title>
        <meta name="description" content="Kampusa Organization Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      {props?.children}
    </ThemeProvider>
  );
}

export default Page;
