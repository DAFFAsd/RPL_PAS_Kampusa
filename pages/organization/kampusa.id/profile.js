import {
  Typography,
  Box,
  Hidden,
  Button,
  ButtonBase,
  Grid,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../../components/general/Page";

import Image from "next/image";
import Link from "next/link";

import NavigationBar from "../../../components/general/NavigationBar";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import OrganizationHeader from "../../../components/organization/OrganizationHeader";

import LogoKampusa from "/public/images/LogoKampusa.jpg";
import LocationIcon from "/public/images/LocationIcon";
import TimeSolidIcon from "/public/images/TimeSolidIcon";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import SearchModal from "../../../components/organization/SearchModal";
import OrganizationPageHeader from "../../../components/organization/OrganizationPageHeader";

function OrganizationPageProfile() {
  return (
    <Page title="Organisasi">
      <Box className="container">
        <Hidden smUp={true}>
          {/* <NavigationBar active="Organization" /> */}
          <OrganizationPageHeader page="profile" />
          <Box
            sx={{
              // height: "calc(100vh - 50px)",
              width: "100%",
              marginTop: "107px",
              paddingBottom: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "10px",
                borderTop: "1px solid rgb(0,0,0,0.12)",
                borderBottom: "1px solid rgb(0,0,0,0.12)",
                // boxShadow: "0px 0px 5px rgb(0,0,0,0.2)",
                borderRadius: 4,
                // mr: 1,
                textTransform: "none",
                color: "inherit",
                textAlign: "left",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  padding: "14px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 12,
                    fontFamily: "'Ubuntu', sans-serif;",
                    mb: 1,
                  }}
                >
                  Profil
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 11,
                      }}
                    >
                      Nama Organisasi
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 11,
                      }}
                    >
                      Organisasi Kampusa
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 11,
                      }}
                    >
                      Institusi
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 11,
                      }}
                    >
                      Universitas Temui
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 11,
                      }}
                    >
                      Deskripsi
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 11,
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem sapiente, quae tempora dignissimos earum sequi
                      maxime illum quia sapiente. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 11,
                      }}
                    >
                      Jenis Organisasi
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 11,
                      }}
                    >
                      Badan Eksekutif Mahasiswa
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 11,
                      }}
                    >
                      Ukuran Organisasi
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 11,
                      }}
                    >
                      0-20 anggota
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
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

export default OrganizationPageProfile;
