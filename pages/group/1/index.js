import { Box, Hidden, Button, ButtonBase, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../../components/general/Page";
import styles from "../../../styles/Group.module.css";

import Image from "next/image";
import Link from "next/link";

import Wave from "/public/images/LandingScreen_Wave.svg";
import Characters from "/public/images/LandingScreen_Characters.svg";
import Background from "/public/images/LandingScreen_Background.svg";
import Particle from "/public/images/Particle.png";
import RedBlock from "/public/images/LandingScreen_RedBlock.svg";
import GreenBlock from "/public/images/LandingScreen_GreenBlock.svg";
import Kampusa from "/public/images/Kampusa_LogoType_Green.svg";
import Google from "/public/images/LandingScreen_Google.svg";
import Facebook from "/public/images/LandingScreen_Facebook.svg";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import Agenda from "/public/images/Agenda.js";
import MemberIcon from "/public/images/Members.svg";
import AgendaIcon from "/public/images/Agenda.svg";
import NoteIcon from "/public/images/Note.svg";
import { CancelRounded, CloseRounded } from "@mui/icons-material";
import { useRouter } from "next/router";

function AuthPage() {
    let router=useRouter()
  return (
    <Page title="Auth">
      <Box sx={{ height: "100vh" }}>
        <Hidden smUp={true}>
          <Box>
            <div className={styles.illustration}>
              <ButtonBase
              onClick={()=>router.back()}
                sx={{
                  position: "fixed",
                  top: 24,
                  left: 16,
                  zIndex: 200,
                  borderRadius: 2,
                }}
              >
                <CloseRounded sx={{ color: "white", fontSize: 24 }} />
              </ButtonBase>
              {/* <div className={styles.characters}>
                <Image
                  className={styles.characters}
                  src={Characters}
                  alt="Character Illustration"
                  layout="intrinsic"
                />
              </div> */}
              <div className={styles.wave}>
                <Image src={Wave} alt="Wave Transition" layout="fill" />
              </div>

              {/* <div className={styles.logoType}>
                <Image src={Kampusa} alt="Kampusa Logo" layout="fill" />
              </div> */}
              {/* <div className={styles.redBlock}>
                <Image
                  data-testid="close-icon"
                  src={RedBlock}
                  alt="Red Block"
                  layout="fill"
                />
              </div>
              <div className={styles.greenBlock}>
                <Image src={GreenBlock} alt="Green Block" layout="fill" />
              </div> */}
              <div className={styles.background}>
                <Image
                  src={Particle}
                  alt="Background Decoration"
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.componentContainer}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    height: 150,
                    width: 150,
                    borderRadius: "50%",
                    position: "absolute",
                    top: "-170px",
                    zIndex: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 10px rgb(0,0,0,0.3)",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "white",
                      height: 140,
                      width: 140,
                      borderRadius: "50%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="https://source.unsplash.com/random/750x750"
                      alt="Group Profile"
                      layout="fill"
                    />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Ubuntu',sans-serif",
                    fontSize: 18,
                    fontWeight: 600,
                    mt: 1,
                  }}
                >
                  People at Kampusa
                </Typography>

                <Typography sx={{ color: "rgb(42,57,63,0.5)", fontSize: 11 }}>
                  Dibuat oleh Organisasi Kampusa, 06/03/2022
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      backgroundColor: "red",
                      height: 30,
                      width: 30,
                      borderRadius: 4,
                      m: "8px 2px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="https://source.unsplash.com/random/650x650"
                      alt="Dropdown Arrow"
                      layout="fill"
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "red",
                      height: 30,
                      width: 30,
                      borderRadius: 4,
                      m: "8px 2px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="https://source.unsplash.com/random/500x500"
                      alt="Dropdown Arrow"
                      layout="fill"
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "rgb(42,57,63,0.3)",
                      padding: "4px 8px 4px 12px",
                      borderRadius: 4,
                      height: 30,
                      m: "8px 2px",
                      display: "flex",
                      color: "white",
                      alignItems: "center",
                      fontSize: 12,
                    }}
                  >
                    2
                    <ArrowForwardIosRounded
                      sx={{ color: "white", fontSize: 12, ml: "2px" }}
                    />
                  </Box>
                </Box>
                <div className={styles.small}>
                  The quick brown fox jumps over the lazy dog.
                </div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "99%",
                }}
              >
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
                  onClick={()=>router.push("/group/1/member")}
                >
                  {/* <Agenda style={{height:22, width:22}} color={"#2A393F"} /> */}

                  <Image alt="image" src={MemberIcon} height={22} width={24} />
                  <Typography
                    sx={{ fontSize: 10 }}
                    style={{ color: "#2A393F" }}
                  >
                    Anggota
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
                  onClick={()=>router.push("/agenda/group/1")}
                >
                  <Image alt="image" src={AgendaIcon} height={21} width={22} />
                  <Typography
                    sx={{ fontSize: 10 }}
                    style={{ color: "#2A393F" }}
                  >
                    Agenda
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
                  onClick={()=>router.push("/group/1/note")}
                >
                  <Image alt="image" src={NoteIcon} height={21} width={22} />
                  <Typography
                    sx={{ fontSize: 10 }}
                    style={{ color: "#2A393F" }}
                  >
                    Note
                  </Typography>
                </ButtonBase>
              </Box>
            </div>
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

export default AuthPage;
