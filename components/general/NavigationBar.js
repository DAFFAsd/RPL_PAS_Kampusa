import React from "react";
import Link from "next/link";

import Home from "/public/images/Home.js";
import Event from "/public/images/Event.js";
import Agenda from "/public/images/Agenda.js";
import Profile from "/public/images/Profile.js";

import Button from "@material-ui/core/Button";

import styles from "./NavigationBar.module.css";
import { ButtonBase } from "@mui/material";

function NavigationBar(props) {
  return (
    <div className={styles.container}>
      {/* <Link passHref={true}  href="/">
        <NavigationButton>
          <Home
            className={styles.navigationButtonIcon}
            color={props.active === "Home" ? "#FAC028" : "#2A393F"}
          />
          <span
            className={styles.navigationButtonText}
            style={{ color: props.active === "Home" ? "#FAC028" : "#2A393F" }}
          >
            Beranda
          </span>
        </NavigationButton>
      </Link> */}
      <Link passHref={true}  href="/organization">
        <ButtonBase
          sx={{
            flex: 1,
            height: "60px",
            borderRadius: 3,
            textTransform: "capitalize",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Event
            className={styles.navigationButtonIcon}
            color={props.active === "Organization" ? "#72448F" : "#2A393F"}
          />
          <span
            className={styles.navigationButtonText}
            style={{
              color: props.active === "Organization" ? "#72448F" : "#2A393F",
            }}
          >
            Organisasi
          </span>
        </ButtonBase>
      </Link>
      <Link passHref={true}  href="/agenda">
        <ButtonBase
          sx={{
            flex: 1,
            height: "60px",
            borderRadius: 3,
            textTransform: "capitalize",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Agenda
            className={styles.navigationButtonIcon}
            color={props.active === "Agenda" ? "#29AD90" : "#2A393F"}
          />
          <span
            className={styles.navigationButtonText}
            style={{ color: props.active === "Agenda" ? "#29AD90" : "#2A393F" }}
          >
            Agenda
          </span>
        </ButtonBase>
      </Link>{" "}
      <Link passHref={true}  href="/profile">
        <ButtonBase
          sx={{
            flex: 1,
            height: "60px",
            borderRadius: 3,
            textTransform: "capitalize",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Profile
            className={styles.navigationButtonIcon}
            color={props.active === "Profile" ? "#FAC028" : "#2A393F"}
          />
          <span
            className={styles.navigationButtonText}
            style={{
              color: props.active === "Profile" ? "#FAC028" : "#2A393F",
            }}
          >
            Profil
          </span>
        </ButtonBase>
      </Link>
    </div>
  );
}

export default NavigationBar;
