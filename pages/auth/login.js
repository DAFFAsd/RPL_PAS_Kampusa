import { Box, Hidden, Button, ButtonBase, InputBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../components/general/Page";
import styles from "../../styles/AuthScreen.module.css";

import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import Image from "next/image";
import LeftArrow from "../../public/images/Arrow_Left.svg";
import Link from "next/link";

function LoginPage() {

  return (
    <Page title="Login">
      <Box className="container">
        <Hidden smUp={true}>
          <div className={styles.container}>
            <Link passHref={true}  href="/auth">
              <ButtonBase
                sx={{
                  minWidth: "18px",
                  maxWidth: "18px",
                  height: "25px",
                  position: "relative",
                }}
              >
                <Image src={LeftArrow} alt="Back Button" layout="fill" />
              </ButtonBase>
            </Link>
            <h1 className={styles.heading}>
              Silakan login dengan akun
              <br />
              Kampusa kamu
            </h1>
            <form>
              <label className={styles.formLabel}>Email</label>
              <InputBase
                placeholder="Misal: nama@email.com"
                sx={{
                  border: "1px solid rgb(255,255,255,0.15)",
                  borderRadius: 25,
                  padding: "5px 20px",
                  background: "rgb(0,0,0,0.15)",
                  width: "100%",
                  color: "white",
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(255,255,255,1)",
                  },
                  margin: "1vh 0 2vh 0",
                }}
              />
              {/* <FormField placeholder="Misal: nama@email.com" /> */}
              <label className={styles.formLabel} type="password">
                Password
              </label> <InputBase
                placeholder="Password"
                sx={{
                  border: "1px solid rgb(255,255,255,0.15)",
                  borderRadius: 25,
                  padding: "5px 20px",
                  background: "rgb(0,0,0,0.15)",
                  width: "100%",
                  color: "white",
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(255,255,255,1)",
                  },
                  margin: "1vh 0 2vh 0",
                }}
              />
              <Link passHref={true}  href="/organization">
                <ButtonBase
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 25,
                    border: 0,
                    color: "#72448F",
                    height: 30,
                    padding: "0 36px",
                    width: "100%",
                    fontSize: 13,
                    fontWeight: 600,
                    marginTop: "3vh",
                    "&:hover": {
                      backgroundColor: "whitesmoke",
                    },
                  }}
                >
                  MASUK
                </ButtonBase>
              </Link>
            </form>
          </div>
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

export default LoginPage;
