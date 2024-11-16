import { Typography, Box, Hidden, Button, ButtonBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../../components/general/Page";
// import styles from "../../styles/LandingScreen.module.css";

import Image from "next/image";
import Link from "next/link";

import NavigationBar from "../../../components/general/NavigationBar";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import OrganizationPageHeader from "../../../components/organization/OrganizationPageHeader";

import KampusaIdentity from "/public/images/KampusaIdentity.svg";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
function OrganizationPageProgram() {
  return (
    <Page title="Organisasi">
      <Box className="container">
        <Hidden smUp={true}>
          <OrganizationPageHeader page="program" />
          {/* <NavigationBar active="Organization" /> */}
          <Box
            sx={{
              minHeight: "calc(100vh - 107px)",
              width: "100%",
              backgroundColor: "#fafafa",
              marginTop: "107px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ButtonBase
              sx={{
                padding: "10px",
                width: "100%",
                backgroundColor: "rgb(84, 185, 211)",
                "&:hover": {
                  backgroundColor: "rgb(74, 175, 201)",
                },
                borderRadius: 2,
                mb: 1,
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 60,
                  width: 60,
                }}
              >
                <Box
                  sx={{ height: "100%", width: "100%", position: "relative" }}
                >
                  <Image
                    data-testid="close-icon"
                    src={KampusaIdentity}
                    alt="Kampusa Logo"
                    layout="fill"
                  />
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LibraryBooksRoundedIcon
                    sx={{ fontSize: 45, color: "white" }}
                  />
                </Box>
              </Box>
              <Box sx={{ ml: 2, flex: 1, color: "white", textAlign: "left" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 11,
                    fontFamily: "'Ubuntu', sans-serif;",
                    mb: "2px",
                  }}
                >
                  Literature Review
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sapiente.
                </Typography>
              </Box>
            </ButtonBase>
            <ButtonBase
              sx={{
                padding: "10px",
                width: "100%",
                backgroundColor: "rgb(255, 128, 34)",
                "&:hover": {
                  backgroundColor: "rgb(245, 118, 24)",
                },
                borderRadius: 2,
                mb: 1,
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 60,
                  width: 60,
                }}
              >
                <Box
                  sx={{ height: "100%", width: "100%", position: "relative" }}
                >
                  <Image
                    data-testid="close-icon"
                    src={KampusaIdentity}
                    alt="Kampusa Logo"
                    layout="fill"
                  />
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PinDropRoundedIcon sx={{ fontSize: 45, color: "white" }} />
                </Box>
              </Box>
              <Box sx={{ ml: 2, flex: 1, color: "white", textAlign: "left" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 11,
                    fontFamily: "'Ubuntu', sans-serif;",
                    mb: "2px",
                  }}
                >
                  Treasure Map
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sapiente.
                </Typography>
              </Box>
            </ButtonBase>
            <ButtonBase
              sx={{
                padding: "10px",
                width: "100%",
                backgroundColor: "rgb(255, 128, 34)",
                "&:hover": {
                  backgroundColor: "rgb(245, 118, 24)",
                },
                borderRadius: 2,
                mb: 1,
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 60,
                  width: 60,
                }}
              >
                <Box
                  sx={{ height: "100%", width: "100%", position: "relative" }}
                >
                  <Image
                    data-testid="close-icon"
                    src={KampusaIdentity}
                    alt="Kampusa Logo"
                    layout="fill"
                  />
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CreateRoundedIcon sx={{ fontSize: 45, color: "white" }} />
                </Box>
              </Box>
              <Box sx={{ ml: 2, flex: 1, color: "white", textAlign: "left" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 11,
                    fontFamily: "'Ubuntu', sans-serif;",
                    mb: "2px",
                  }}
                >
                  Open Submission
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sapiente, quae tempora dignissimos earum sequi
                  maxime illum quia sapiente.
                </Typography>
              </Box>
            </ButtonBase>
            <ButtonBase
              sx={{
                padding: "10px",
                width: "100%",
                backgroundColor: "#E15142",
                "&:hover": {
                  backgroundColor: "#D14132",
                },
                borderRadius: 2,
                mb: 1,
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 60,
                  width: 60,
                }}
              >
                <Box
                  sx={{ height: "100%", width: "100%", position: "relative" }}
                >
                  <Image
                    data-testid="close-icon"
                    src={KampusaIdentity}
                    alt="Kampusa Logo"
                    layout="fill"
                  />
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <WarningRoundedIcon sx={{ fontSize: 45, color: "white" }} />
                </Box>
              </Box>
              <Box sx={{ ml: 2, flex: 1, color: "white", textAlign: "left" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 11,
                    fontFamily: "'Ubuntu', sans-serif;",
                    mb: "2px",
                  }}
                >
                  Tombol Darurat
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sapiente, quae tempora dignissimos earum sequi
                  maxime illum quia sapiente.
                </Typography>
              </Box>
            </ButtonBase>
          </Box>
        </Hidden>
        <Hidden smDown={true}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              justifyContent: "center",
            }}
          >
            <Image
              data-testid="close-icon"
              src={KampusaLogo}
              alt="Kampusa Logo"
              layout="intrinsic" height={100} width={100}
            />
            <h2>Under Development</h2>
          </Box>
        </Hidden>
      </Box>
    </Page>
  );
}

export default OrganizationPageProgram;
