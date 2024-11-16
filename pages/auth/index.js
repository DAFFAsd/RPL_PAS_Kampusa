import { Box, Hidden, Button, ButtonBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../components/general/Page";
import styles from "../../styles/LandingScreen.module.css";

import Image from "next/image";
import Link from "next/link";

import Wave from "/public/images/LandingScreen_Wave.svg";
import Characters from "/public/images/LandingScreen_Characters.svg";
import Background from "/public/images/LandingScreen_Background.svg";
import RedBlock from "/public/images/LandingScreen_RedBlock.svg";
import GreenBlock from "/public/images/LandingScreen_GreenBlock.svg";
import Kampusa from "/public/images/Kampusa_LogoType_Green.svg";
import Google from "/public/images/LandingScreen_Google.svg";
import Facebook from "/public/images/LandingScreen_Facebook.svg";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";

function AuthPage() {

  return (
    <Page title="Auth">
      <Box sx={{height:"100vh"}}>
        <Hidden smUp={true}>
          <Box>
            <div className={styles.illustration}>
              <div className={styles.characters}>
                <Image
                  className={styles.characters}
                  src={Characters}
                  alt="Character Illustration"
                  layout="fill"
                />
              </div>
              <div className={styles.wave}>
                <Image src={Wave} alt="Wave Transition"layout="fill" />
              </div>

              <div className={styles.logoType}>
                <Image src={Kampusa} alt="Kampusa Logo" layout="fill" />
              </div>
              <div className={styles.redBlock}>
                <Image
                  data-testid="close-icon"
                  src={RedBlock}
                  alt="Red Block"
                  layout="fill"
                />
              </div>
              <div className={styles.greenBlock}>
                <Image src={GreenBlock} alt="Green Block" layout="fill" />
              </div>
              <div className={styles.background}>
                <Image
                  src={Background}
                  alt="Background Decoration"
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.componentContainer}>
              <h1 className={styles.heading}>Halo!</h1>
              <span className={styles.small}>
                Terima kasih sudah berpartisipasi dalam <br />
                <i>Beta Testing</i> Kampusa!
              </span>
              <div className={styles.buttonContainer}>
                <Link passHref={true}  href="/auth/login">
                  <ButtonBase
                    sx={{
                      backgroundColor: "#72448F",
                      borderRadius: 25,
                      border: 0,
                      color: "white",
                      height: 30,
                      padding: "0 36px",
                      marginRight: "2px",
                      marginLeft: "2px",
                      fontSize: 12,
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#52246F",
                      },
                    }}
                    variant="contained"
                  >
                    MASUK
                  </ButtonBase>
                </Link>

                {/* <ButtonBase
                  sx={{
                    borderRadius: 25,
                    border: 0,
                    color: "#72448F",
                    height: 33,
                    padding: "0 36px",
                    border: "1.5px solid #72448F",
                    marginRight: "2px",
                    marginLeft: "2px",
                    fontSize: 13,
                    fontWeight:600,
                    "&:hover": {
                      color: "#52246F",
                      backgroundColor: "rgb(114,68,143,0.2)",
                    },
                  }}
                  variant="outlined"
                >
                  DAFTAR
                </ButtonBase> */}
              </div>
              {/* <span className={styles.small}>
          Atau masuk dengan akun media sosial kamu
        </span>
        <div className={styles.buttonContainer}>
          <SocialMediaButton>
            <div className={styles.socialMedia}>
              <Image src={Google} alt="Google Logo" layout="fill" />
            </div>
          </SocialMediaButton>
          <SocialMediaButton>
            <div className={styles.socialMedia}>
              <Image src={Facebook} alt="Facebook Logo" layout="fill" />
            </div>
          </SocialMediaButton>
        </div> */}
              {/* <div className={styles.smaller}>
          Dengan masuk atau mendaftar, kamu menyetujui<br/>
          <span className={styles.link}>Ketentuan Layanan </span>
          dan <span className={styles.link}>Kebijakan Privasi</span>.
        </div> */}
            </div>
          </Box>
        </Hidden>
        <Hidden smDown={true}>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", height:"100vh", justifyContent:"center"}}>
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

export default AuthPage;
