import { Typography, Box, Hidden, Button, ButtonBase } from "@mui/material";
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

function OrganizationPage() {
  return (
    <Page title="Organisasi">
      <Box className="container">
        <Hidden smUp={true}>
          {/* <NavigationBar active="Organization" /> */}
          <OrganizationPageHeader page="home" />
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
                    mb: "2px",
                  }}
                >
                  Profil
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 11,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sapiente, quae tempora dignissimos earum sequi
                  maxime illum quia sapiente. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptatem sapiente, quae
                  tempora dignissimos earum sequi maxime illum quia itaque
                  aperiam!
                </Typography>
              </Box>

              <Link passHref={true}  href="/organization/kampusa.id/profile">
                <ButtonBase
                  sx={{
                    borderTop: "1px solid #D9D9D9",
                    width: "100%",
                    padding: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      fontFamily: "'Ubuntu', sans-serif;",
                      mb: "2px",
                      color: "#72448F",
                    }}
                  >
                    Lihat profil lengkap
                  </Typography>
                </ButtonBase>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
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
                  paddingBottom: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 12,
                    fontFamily: "'Ubuntu', sans-serif;",
                  }}
                >
                  Post
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  overflowX: "auto",
                  pl: 2,
                  pr: 2,
                  pb: 2,
                }}
              >
                <Link passHref={true}  href="/organization/kampusa.id/post">
                  <Button
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      minWidth: 200,
                      width: 200,
                      border: "1px solid rgb(0,0,0,0.12)",
                      borderRadius: 2,
                      mr: 1,
                      textTransform: "none",
                      color: "inherit",
                      textAlign: "left",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        paddingBottom: 1,
                        borderBottom: "1px solid rgb(0,0,0,0.12)",
                        justifyContent: "flex-start",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
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
                    </Box>
                    <Box
                      sx={{
                        height: 150,
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={"https://source.unsplash.com/random/100x100"}
                        layout="fill" alt="image"
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
                          WebkitLineClamp: 2 /* number of lines to show */,
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem sapiente, quae tempora dignissimos earum
                        sequi maxime illum quia itaque aperiam!
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
                  </Button>
                </Link>
                <Link passHref={true}  href="/organization/kampusa.id/post">
                  <Button
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      minWidth: 200,
                      width: 200,
                      border: "1px solid rgb(0,0,0,0.12)",
                      borderRadius: 2,
                      mr: 1,
                      textTransform: "none",
                      color: "inherit",
                      textAlign: "left",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        paddingBottom: 1,
                        borderBottom: "1px solid rgb(0,0,0,0.12)",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
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
                    </Box>
                    <Box
                      sx={{
                        height: 150,
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={"https://source.unsplash.com/user/erondu/100x100"}
                        layout="fill" alt="image"
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
                          WebkitLineClamp: 2 /* number of lines to show */,
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem sapiente, quae tempora dignissimos earum
                        sequi maxime illum quia itaque aperiam!
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
                  </Button>
                </Link>
                <Link passHref={true}  href="/organization/kampusa.id/post">
                  <Button
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      minWidth: 200,
                      width: 200,
                      border: "1px solid rgb(0,0,0,0.12)",
                      borderRadius: 2,
                      mr: 1,
                      textTransform: "none",
                      color: "inherit",
                      textAlign: "left",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        paddingBottom: 1,
                        borderBottom: "1px solid rgb(0,0,0,0.12)",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
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
                    </Box>
                    <Box
                      sx={{
                        height: 150,
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={
                          "https://source.unsplash.com/collection/190728/100x100"
                        }
                        layout="fill" alt="image"
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
                          WebkitLineClamp: 2 /* number of lines to show */,
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem sapiente, quae tempora dignissimos earum
                        sequi maxime illum quia itaque aperiam!
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
                  </Button>
                </Link>
                <Link passHref={true}  href="/organization/kampusa.id/post">
                  <Button
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      minWidth: 200,
                      width: 200,
                      border: "1px solid rgb(0,0,0,0.12)",
                      borderRadius: 2,
                      mr: 1,
                      textTransform: "none",
                      color: "inherit",
                      textAlign: "left",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        paddingBottom: 1,
                        borderBottom: "1px solid rgb(0,0,0,0.12)",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
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
                    </Box>
                    <Box
                      sx={{
                        height: 150,
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={
                          "https://source.unsplash.com/collection/1230/100x100"
                        }
                        layout="fill" alt="image"
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
                          WebkitLineClamp: 2 /* number of lines to show */,
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem sapiente, quae tempora dignissimos earum
                        sequi maxime illum quia itaque aperiam!
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
                  </Button>
                </Link>
              </Box>

              <Link passHref={true}  href="/organization/kampusa.id/post">
                <ButtonBase
                  sx={{
                    borderTop: "1px solid #D9D9D9",
                    width: "100%",
                    padding: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      fontFamily: "'Ubuntu', sans-serif;",
                      mb: "2px",
                      color: "#72448F",
                    }}
                  >
                    Lihat semua post
                  </Typography>
                </ButtonBase>
              </Link>
            </Box>
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
                  paddingBottom: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 12,
                    fontFamily: "'Ubuntu', sans-serif;",
                  }}
                >
                  Agenda
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  overflowX: "auto",
                  padding: "0 16px 16px 16px",
                }}
              >
                <Link passHref={true}  href="/organization/kampusa.id/agenda">
                  <Button
                    variant="outlined"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "rgb(	114, 66, 144,0.15)",
                      "&:hover": {
                        backgroundColor: "rgb(	114, 66, 144,0.25)",
                      },
                      minWidth: 220,
                      width: 220,
                      borderRadius: 2,
                      mr: 1,
                      textTransform: "none",
                      textAlign: "left",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2 /* number of lines to show */,
                        lineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontWeight: 600,
                        fontSize: 11,
                      }}
                    >
                      Festival of Study Abroad in the Country of Andaman
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationIcon color="#72448F" />
                      <Typography
                        sx={{ fontSize: 10, ml: "3px", color: "black" }}
                      >
                        Hotel Java Heritage, Purwokerto
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TimeSolidIcon color="#72448F" />
                      <Typography
                        sx={{ fontSize: 10, ml: "3px", color: "black" }}
                      >
                        Jumat, 19/03/2021, 17.00-19.00
                      </Typography>
                    </Box>
                  </Button>
                </Link>
                <Link passHref={true}  href="/organization/kampusa.id/agenda">
                  <Button
                    variant="outlined"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "rgb(	114, 66, 144,0.15)",
                      "&:hover": {
                        backgroundColor: "rgb(	114, 66, 144,0.25)",
                      },
                      minWidth: 220,
                      width: 220,
                      borderRadius: 2,
                      mr: 1,
                      textTransform: "none",
                      textAlign: "left",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2 /* number of lines to show */,
                        lineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontWeight: 600,
                        fontSize: 12,
                      }}
                    >
                      Mobile Legends Competition
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationIcon color="#72448F" />
                      <Typography
                        sx={{ fontSize: 10, ml: "3px", color: "black" }}
                      >
                        Google Meet
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TimeSolidIcon color="#72448F" />
                      <Typography
                        sx={{ fontSize: 10, ml: "3px", color: "black" }}
                      >
                        Sabtu, 20/03/2021, 17.00-19.00
                      </Typography>
                    </Box>
                  </Button>
                </Link>{" "}
                <Link passHref={true}  href="/organization/kampusa.id/agenda">
                  <Button
                    variant="outlined"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#724290",
                      "&:hover": {
                        backgroundColor: "#623280",
                      },
                      minWidth: 220,
                      width: 220,
                      borderRadius: 2,
                      mr: 1,
                      color: "white",
                      textTransform: "none",
                      textAlign: "left",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2 /* number of lines to show */,
                        lineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontWeight: 600,
                        fontSize: 12,
                      }}
                    >
                      Deadline Open Submission
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationIcon color="white" />
                      <Typography sx={{ fontSize: 10, ml: "3px" }}>
                        Google Meet
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TimeSolidIcon color="white" />
                      <Typography sx={{ fontSize: 10, ml: "3px" }}>
                        Sabtu, 20/03/2021, 17.00-19.00
                      </Typography>
                    </Box>
                  </Button>
                </Link>
              </Box>
              <Link passHref={true}  href="/organization/kampusa.id/agenda">
                <ButtonBase
                  sx={{
                    borderTop: "1px solid #D9D9D9",
                    width: "100%",
                    padding: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      fontFamily: "'Ubuntu', sans-serif;",
                      mb: "2px",
                      color: "#72448F",
                    }}
                  >
                    Lihat lebih banyak
                  </Typography>
                </ButtonBase>
              </Link>
            </Box>
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
                  paddingBottom: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 12,
                    fontFamily: "'Ubuntu', sans-serif;",
                  }}
                >
                  Program
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  overflowX: "auto",
                  mt: 1,
                  padding: "0 16px 16px 16px",
                }}
              >
                <Link passHref={true}  href="/organization/kampusa.id/program">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mr: 1,
                      maxWidth: 70,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="inherit"
                      sx={{
                        padding: 1,
                        flex: 1,
                        minWidth: 70,
                        maxHeight: 70,
                        backgroundColor: "#E15142",
                        "&:hover": {
                          backgroundColor: "#D14132",
                        },
                        borderRadius: 2,
                      }}
                    >
                      <LibraryBooksRoundedIcon
                        sx={{ fontSize: 30, color: "white" }}
                      />
                    </Button>
                    <Typography
                      sx={{
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontSize: 11,
                        fontWeight: 500,
                        mt: "3px",
                        textAlign: "center",
                      }}
                    >
                      Literature Review
                    </Typography>
                  </Box>
                </Link>
                <Link passHref={true}  href="/organization/kampusa.id/program">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mr: 1,
                      // height:80,
                      maxWidth: 70,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="inherit"
                      sx={{
                        padding: 1,
                        flex: 1,
                        minWidth: 70,
                        minHeight: 70,
                        maxHeight: 70,
                        backgroundColor: "#E15142",
                        "&:hover": {
                          backgroundColor: "#D14132",
                        },
                        borderRadius: 2,
                      }}
                    >
                      <PinDropRoundedIcon
                        sx={{ fontSize: 30, color: "white" }}
                      />
                    </Button>
                    <Typography
                      sx={{
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontSize: 11,
                        fontWeight: 500,
                        mt: "3px",
                        textAlign: "center",
                      }}
                    >
                      Treasure Map
                    </Typography>
                  </Box>
                </Link>
                <Link passHref={true}  href="/organization/kampusa.id/program">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mr: 1,
                      maxWidth: 70,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="inherit"
                      sx={{
                        padding: 1,
                        flex: 1,
                        minWidth: 70,
                        minHeight: 70,
                        backgroundColor: "#E15142",
                        "&:hover": {
                          backgroundColor: "#D14132",
                        },
                        borderRadius: 2,
                      }}
                    >
                      <CreateRoundedIcon
                        sx={{ fontSize: 30, color: "white" }}
                      />
                    </Button>
                    <Typography
                      sx={{
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontSize: 11,
                        fontWeight: 500,
                        mt: "3px",
                        textAlign: "center",
                        lineHeight: "16px",
                      }}
                    >
                      Open Submission
                    </Typography>
                  </Box>
                </Link>
                <Link passHref={true}  href="/organization/kampusa.id/program">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mr: 1,
                      maxWidth: 70,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="inherit"
                      sx={{
                        padding: 1,
                        flex: 1,
                        minWidth: 70,
                        minHeight: 70,
                        backgroundColor: "#E15142",
                        "&:hover": {
                          backgroundColor: "#D14132",
                        },
                        borderRadius: 2,
                      }}
                    >
                      <WarningRoundedIcon
                        sx={{ fontSize: 30, color: "white" }}
                      />
                    </Button>
                    <Typography
                      sx={{
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontSize: 11,
                        fontWeight: 500,
                        mt: "3px",
                        textAlign: "center",
                        lineHeight: "16px",
                      }}
                    >
                      Tombol Darurat
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Link passHref={true}  href="/organization/kampusa.id/program">
                <ButtonBase
                  sx={{
                    borderTop: "1px solid #D9D9D9",
                    width: "100%",
                    padding: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      fontFamily: "'Ubuntu', sans-serif;",
                      mb: "2px",
                      color: "#72448F",
                    }}
                  >
                    Lihat semua program
                  </Typography>
                </ButtonBase>
              </Link>
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
              layout="intrinsic"
              width={100}
              height={100}
            />
            <h2>Under Development</h2>
          </Box>
        </Hidden>
      </Box>
    </Page>
  );
}

export default OrganizationPage;
