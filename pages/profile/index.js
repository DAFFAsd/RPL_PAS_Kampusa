import { Typography, Box, Hidden, Button, ButtonBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../components/general/Page";
import styles from "../../styles/LandingScreen.module.css";

import Image from "next/image";
import Link from "next/link";
import MemberFill from "/public/images/Members.svg";
import MemberOutline from "/public/images/MemberOutline.svg";
import OrganizationFill from "/public/images/OrganizationFill.svg";
import OrganizationOutline from "/public/images/OrganizationOutline.svg";

import NavigationBar from "../../components/general/NavigationBar";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import OrganizationHeader from "../../components/organization/OrganizationHeader";

import TimeSolidIcon from "/public/images/TimeSolidIcon";
import LogoKampusa from "/public/images/LogoKampusa.jpg";
import SearchModal from "../../components/organization/SearchModal";
import { useRouter } from "next/router";

function Profile() {
  let [selected, setSelected] = useState("organization");
  let router=useRouter()
  return (
    <Page title="Profile">
      <Box className="container">
        <Hidden smUp={true}>
          <NavigationBar active="Profile" />
          <Box
            sx={{
              display: "flex",
              padding: 2,
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid rgb(0,0,0,0.13)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Ubuntu',sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                M. Alwi Sukra
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 12,
                }}
              >
                arkoesalwi@gmail.com
              </Typography>
              <ButtonBase
                sx={{
                  backgroundColor: "#E21D2F",
                  borderRadius: 3,
                  padding: "4px 8px",
                  alignSelf: "flex-start",
                  fontSize: 11,
                  fontWeight: 400,
                  color: "white",
                  mt: 1,
                }}
              >
                Logout
              </ButtonBase>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: 70,
                  width: 70,
                  // backgroundColor: "red",
                  borderRadius: "40px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://source.unsplash.com/random/500x500"
                  layout="fill" alt="image"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              borderBottom: "1px solid rgb(0,0,0,0.13)",
            }}
          ><ButtonBase
          sx={{
            padding: 1,
            borderRadius: 3,
            textTransform: "capitalize",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
          onClick={() => setSelected("organization")}
        >
          <Image
            src={
              selected === "organization"
                ? OrganizationFill
                : OrganizationOutline
            }
            height={20}
            width={20} alt="image"
          />
          <Typography sx={{ fontSize: 10 }} style={{ color: "#2A393F" }}>
            Organisasi
          </Typography>
        </ButtonBase>
            <ButtonBase
              sx={{
                padding: 1,
                borderRadius: 3,
                textTransform: "capitalize",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
              onClick={() => setSelected("group")}
            >
              <Image
                src={selected === "group" ? MemberFill : MemberOutline}
                height={17}
                width={22} alt="image"
              />
              <Typography sx={{ fontSize: 10 }} style={{ color: "#2A393F" }}>
                Grup
              </Typography>
            </ButtonBase>
            
          </Box>
          <Box
            sx={{
              width: "100%",
              display: selected === "group" ? "block" : "none",
            }}
          >
            <ButtonBase
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // m: "10px 0",
                width: "100%",
                padding: "8px 16px",
              }}
              onClick={() => router.push("/group/1")}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: 40,
                    width: 40,

                    borderRadius: "25px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://source.unsplash.com/random/750x750"
                    width={100}
                    height={100} alt="image"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      // fontFamily: "'Ubuntu', sans-serif;",
                      lineHeight: "15px",
                    }}
                  >
                    Tech at Kampusa
                  </Typography>
                  <Typography
                    sx={{
                      //   fontWeight: 600,
                      fontSize: 11,
                      // fontFamily: "'Ubuntu', sans-serif;",
                      lineHeight: "15px",
                    }}
                  >
                    2 Anggota
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", height: 25 }}>
                {/* <Box
                  sx={{
                    fontSize: 10,
                    border: "1px solid rgb(32, 174, 142)",
                    color: "rgb(32, 174, 142)",
                    fontWeight: 500,
                    padding: "2px 4px",
                    borderRadius: 4,
                    // mr:1
                  }}
                >
                  Admin
                </Box> */}
                {/* <ButtonBase
                      sx={{
                        borderRadius: 1,
                        height: "100%",
                        //   width:"40px",
                        justifyContent: "center",
                        alignItems: "center",
                        justifySelf: "flex-end",
                        padding: "4px",
                      }}
                    >
                      <Image
                        src={Kebab}
                        alt="Kebab Icon"
                        height={14}
                        width={14}
                      />
                    </ButtonBase> */}
              </Box>
            </ButtonBase>
            <ButtonBase
              onClick={() => router.push("/group/1")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 16px",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: 40,
                    width: 40,

                    borderRadius: "25px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://source.unsplash.com/random/500x500"
                    width={100}
                    height={100} alt="image"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      // fontFamily: "'Ubuntu', sans-serif;",
                      lineHeight: "15px",
                    }}
                  >
                    People at Kampusa
                  </Typography>
                  <Typography
                    sx={{
                      //   fontWeight: 600,
                      fontSize: 11,
                      // fontFamily: "'Ubuntu', sans-serif;",
                      lineHeight: "15px",
                    }}
                  >
                    4 Anggota
                  </Typography>
                </Box>
              </Box>
              {/* <Box
                    sx={{ display: "flex", alignItems: "center", height: 25 }}
                  >
                    <Box
                      sx={{
                        fontSize: 10,
                        border: "1px solid teal",
                        color: "rgb(32, 174, 142)",
                        fontWeight: 500,
                        padding: "2px 4px",
                        borderRadius: 4,
                        // mr:1
                      }}
                    >
                      Admin
                    </Box>
                  </Box> */}
            </ButtonBase>
          </Box><Box
            sx={{
              width: "100%",
              display: selected === "organization" ? "block" : "none",
            }}
          >
            <ButtonBase
              onClick={() => router.push("/organization/kampusa.id")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // m: "10px 0",
                width: "100%",
                padding: "8px 16px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: 40,
                    width: 40,

                    borderRadius: "25px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://source.unsplash.com/random/750x750"
                    width={100}
                    height={100} alt="image"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      // fontFamily: "'Ubuntu', sans-serif;",
                      lineHeight: "15px",
                    }}
                  >
                    Organisasi Kampusa
                  </Typography>
                  <Typography
                    sx={{
                      //   fontWeight: 600,
                      fontSize: 11,
                      // fontFamily: "'Ubuntu', sans-serif;",
                      lineHeight: "15px",
                    }}
                  >
                    Universitas Temui
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", height: 25 }}>
                <Box
                  sx={{
                    fontSize: 10,
                    border: "1px solid rgb(32, 174, 142)",
                    color: "rgb(32, 174, 142)",
                    fontWeight: 500,
                    padding: "2px 4px",
                    borderRadius: 4,
                    // mr:1
                  }}
                >
                  Anggota
                </Box>
                {/* <ButtonBase
                      sx={{
                        borderRadius: 1,
                        height: "100%",
                        //   width:"40px",
                        justifyContent: "center",
                        alignItems: "center",
                        justifySelf: "flex-end",
                        padding: "4px",
                      }}
                    >
                      <Image
                        src={Kebab}
                        alt="Kebab Icon"
                        height={14}
                        width={14}
                      />
                    </ButtonBase> */}
              </Box>
            </ButtonBase>
            <ButtonBase
              onClick={() => router.push("/organization/kampusa.id")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 16px",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: 40,
                    width: 40,

                    borderRadius: "25px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://source.unsplash.com/random/500x500"
                    width={100}
                    height={100} alt="image"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      // fontFamily: "'Ubuntu', sans-serif;",
                      lineHeight: "15px",
                    }}
                  >
                    Organisasi Raksasa
                  </Typography>
                  <Typography
                    sx={{
                      //   fontWeight: 600,
                      fontSize: 11,
                      // fontFamily: "'Ubuntu', sans-serif;",
                      lineHeight: "15px",
                    }}
                  >
                    Universitas Raksasa
                  </Typography>
                </Box>
              </Box>
              <Box
                    sx={{ display: "flex", alignItems: "center", height: 25 }}
                  >
                    <Box
                  sx={{
                    fontSize: 10,
                    border: "1px solid rgb(32, 174, 142)",
                    color: "rgb(32, 174, 142)",
                    fontWeight: 500,
                    padding: "2px 4px",
                    borderRadius: 4,
                    // mr:1
                  }}
                >
                  Anggota
                </Box>
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

export default Profile;
