import { Typography, Box, Hidden, Button, ButtonBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../../components/general/Page";
// import styles from "../../styles/LandingScreen.module.css";

import Image from "next/image";
import Link from "next/link";

import NavigationBar from "../../../components/general/NavigationBar";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import OrganizationPageHeader from "../../../components/organization/OrganizationPageHeader";

import TimeSolidIcon from "/public/images/TimeSolidIcon";
import LogoKampusa from "/public/images/LogoKampusa.jpg";
function OrganizationPagePost() {
  return (
    <Page title="Organisasi">
      <Box className="container">
        <Hidden smUp={true}>
          <OrganizationPageHeader page="post" />
          {/* <NavigationBar active="Organization" /> */}
          <Box
            sx={{
              minHeight: "calc(100vh - 107px)",
              width: "100%",
              backgroundColor: "#fafafa",
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
                backgroundColor:"white",
                marginTop: "10px",
                borderTop: "1px solid rgb(0,0,0,0.12)",
                borderBottom: "1px solid rgb(0,0,0,0.12)",
                borderRadius: 2,
                // mr: 1,
                textTransform: "none",
                color: "inherit",
                textAlign: "left",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  padding: "4px",
                  borderBottom: "1px solid rgb(0,0,0,0.12)",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Link passHref={true}  href="/organization/kampusa.id">
                  <ButtonBase sx={{ padding: "4px", borderRadius: 2 }}>
                    <Box
                      sx={{
                        height: 25,
                        width: 25,

                        borderRadius: "25px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image alt="image" src={LogoKampusa} width={100} height={100} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: 12,
                          fontFamily: "'Ubuntu', sans-serif;",
                          ml: 1,
                          lineHeight: "15px",
                        }}
                      >
                        Organisasi Kampusa
                      </Typography>
                    </Box>
                  </ButtonBase>
                </Link>
              </Box>
              <Box
                sx={{
                  height: "100vw",
                  maxHeight: "50vh",
                  width: "100vw",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={"https://source.unsplash.com/collection/190728/500x500"}
                  layout="responsive"
                  width={500}
                  height={500} alt="image"
                />
              </Box>
              <Box sx={{ padding: 1, overflow: "hidden" }}>
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 400,
                    textAlign: "left",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "-webkit-box",
                    lineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3 /* number of lines to show */,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sapiente, quae tempora dignissimos earum sequi
                  maxime illum quia sapiente. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptatem sapiente, quae
                  tempora dignissimos earum sequi maxime illum quia itaque
                  aperiam!
                </Typography>
                <ButtonBase
                  sx={{
                    fontSize: 11,
                    fontWeight: 400,
                    borderRadius: 1,
                    borderRadius: 1,
                    padding: "4px 0",
                    color: "rgb(0,0,0,0.5)",
                  }}
                >
                  Read More
                </ButtonBase>
              </Box>
              <Box
                sx={{
                  padding: 1,
                  paddingTop: 0,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TimeSolidIcon color="rgb(0,0,0,0.5)" />
                <Typography
                  sx={{
                    color: "rgb(0,0,0,0.5)",
                    fontSize: 11,
                    ml: "3px",
                  }}
                >
                  1 hour ago
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "10px",
                borderTop: "1px solid rgb(0,0,0,0.12)",
                borderBottom: "1px solid rgb(0,0,0,0.12)",
                borderRadius: 2,
                backgroundColor:"white",
                // mr: 1,
                textTransform: "none",
                color: "inherit",
                textAlign: "left",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  padding: "4px",
                  borderBottom: "1px solid rgb(0,0,0,0.12)",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Link passHref={true}  href="/organization/kampusa.id">
                  <ButtonBase sx={{ padding: "4px", borderRadius: 2 }}>
                    <Box
                      sx={{
                        height: 25,
                        width: 25,

                        borderRadius: "25px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image src={LogoKampusa} width={100} height={100} alt="image"/>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: 12,
                          fontFamily: "'Ubuntu', sans-serif;",
                          ml: 1,
                          lineHeight: "15px",
                        }}
                      >
                        Organisasi Kampusa
                      </Typography>
                    </Box>
                  </ButtonBase>
                </Link>
              </Box>
              <Box
                sx={{
                  height: "100vw",
                  maxHeight: "50vh",
                  width: "100vw",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={"https://source.unsplash.com/random/500x500"}
                  layout="responsive"
                  width={500}
                  height={500} alt="image"
                />
              </Box>
              <Box sx={{ padding: 1, overflow: "hidden" }}>
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 400,
                    textAlign: "left",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sapiente, quae tempora dignissimos earum sequi
                  maxime illum quia itaque aperiam!
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: 1,
                  paddingTop: 0,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TimeSolidIcon color="rgb(0,0,0,0.5)" />
                <Typography
                  sx={{
                    color: "rgb(0,0,0,0.5)",
                    fontSize: 11,
                    ml: "3px",
                  }}
                >
                  1 hour ago
                </Typography>
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

export default OrganizationPagePost;
