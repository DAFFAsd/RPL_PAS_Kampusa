import { Typography, Box, Hidden, Button, ButtonBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../../components/general/Page";
import styles from "../../../components/organization/Agenda.module.css";

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
          <OrganizationPageHeader page="agenda" />
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
              height: "100%",
              pt: 1,
            }}
          >
            <div className={styles.weekContainer}>
              <div className={styles.dayContainer}>
              <div className={styles.week}>28 FEBRUARI - 6 MARET</div>
              </div>
              <div className={styles.dayContainer}>
                <div className={styles.dayDateContainer}>
                  <span className={styles.dayDateNumber_inactive}>28</span>
                  <span className={styles.dayDateName}>SEN</span>
                </div>
                <div className={styles.dayItemsContainer}>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      border: "1.5px solid #724290",
                      backgroundColor: "rgb(114,66,144,0.15)",
                      color: "#724290",
                      "&:hover": {
                        backgroundColor: "rgb(114,66,144,0.2)",
                      },
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Pengumpulan LPJ
                      </span>
                      <span className={styles.descriptionDetails}>
                        16.00 at Google Form
                      </span>
                    </div>
                  </ButtonBase>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      backgroundColor: "#724290",
                      color: "white",
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#623280",
                      },
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Weekly Diligent Session
                      </span>
                      <span className={styles.descriptionDetails}>
                        20.00 - 22.00 at Zoom Meeting
                      </span>
                    </div>
                  </ButtonBase>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      backgroundColor: "#724290",
                      color: "white",
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#623280",
                      },
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Deadline Pendaftaran Anggota
                      </span>
                      <span className={styles.descriptionDetails}>
                        24.00 at Google Form
                      </span>
                    </div>
                  </ButtonBase>
                </div>
              </div>
              <div className={styles.dayContainer}>
                <div className={styles.week}>MARET</div>
              </div>
              <div className={styles.dayContainer}>
                <div className={styles.dayDateContainer}>
                  <span className={styles.dayDateNumber_active}>3</span>
                  <span className={styles.dayDateName}>KAM</span>
                </div>
                <div className={styles.dayItemsContainer}>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      backgroundColor: "#724290",
                      color: "white",
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#623280",
                      },
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Lomba Mobile Legend
                      </span>
                      <span className={styles.descriptionDetails}>
                        14.00 - 18.00
                      </span>
                    </div>
                  </ButtonBase>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      backgroundColor: "#724290",
                      color: "white",
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#623280",
                      },
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Pameran Seni
                      </span>
                      <span className={styles.descriptionDetails}>
                        15.00 - 19.00 at Galeri Nasional
                      </span>
                    </div>
                  </ButtonBase><ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      border: "1.5px solid #724290",
                      backgroundColor: "rgb(114,66,144,0.15)",
                      color: "#724290",
                      "&:hover": {
                        backgroundColor: "rgb(114,66,144,0.2)",
                      },
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Evaluasi Pameran
                      </span>
                      <span className={styles.descriptionDetails}>
                        20.00 - 22.00 at Zoom Meeting
                      </span>
                    </div>
                  </ButtonBase>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      backgroundColor: "#724290",
                      color: "white",
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#623280",
                      },
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Rapat Besar
                      </span>
                      <span className={styles.descriptionDetails}>
                        20.00 - 22.00 at Zoom Meeting
                      </span>
                    </div>
                  </ButtonBase>
                </div>
              </div>
              <div className={styles.dayContainer}>
                <div className={styles.dayDateContainer}>
                  <span className={styles.dayDateNumber_inactive}>5</span>
                  <span className={styles.dayDateName}>SAB</span>
                </div>
                <div className={styles.dayItemsContainer}>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      border: "1.5px solid #724290",
                      backgroundColor: "rgb(114,66,144,0.15)",
                      color: "#724290",
                      "&:hover": {
                        backgroundColor: "rgb(114,66,144,0.2)",
                      },
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Nobar Little Mom
                      </span>
                      <span className={styles.descriptionDetails}>
                        20.00 - 22.00 at Zoom Meeting
                      </span>
                    </div>
                  </ButtonBase>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      position: "relative",
                      backgroundColor: "#724290",
                      color: "white",
                      textTransform: "none",
                      marginBottom: 1,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#623280",
                      },
                    }}
                  >
                    <div className={styles.dayDescriptionContainer}>
                      <span className={styles.descriptionHeading}>
                        Deadline Open Submission
                      </span>
                      <span className={styles.descriptionDetails}>
                        24.00 at Google Form
                      </span>
                    </div>
                  </ButtonBase>
                </div>
              </div>
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

export default OrganizationPagePost;
