import { Typography, Box, Hidden, Button, ButtonBase } from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../components/general/Page";

import Image from "next/image";
import Link from "next/link";

import NavigationBar from "../../components/general/NavigationBar";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import styles from "../../styles/Agenda.module.css";
import PostIcon from "/public/images/PostIcon.js";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import OrganizationHeader from "../../components/organization/OrganizationHeader";

import Hamburger from "../../public/images/HamburgerIcon.svg";
import Search from "../../public/images/Search.svg";
import AgendaSidebar from "../../components/agenda/AgendaModal_Sidebar";
import Kebab from "../../public/images/KebabIcon.svg";
import ArrowBottom from "../../public/images/Arrow_Bottom.svg";
import Plus from "../../public/images/Plus.svg";
import AgendaDay from "../../components/agenda/AgendaDay";
import AgendaWeek from "../../components/agenda/AgendaWeek";
import AgendaMonth from "../../components/agenda/AgendaMonth";
import AgendaAgenda from "../../components/agenda/AgendaAgenda";
import AgendaDetailsModal from "../../components/agenda/AgendaDetailsModal";


function Agenda() {
  let [timeRange, setTimeRange] = useState("day");
  let [month, setMonth] = useState("Maret");
  let [showSidebar, setShowSidebar] = useState(false);
  let [openAgendaDetailsModal, setOpenAgendaDetailsModal] = useState(false);

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const dayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  let timeShow = () => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignSelf: "flex-start",
          height: "100%",
        }}
      >
      {openAgendaDetailsModal && (
        <AgendaDetailsModal
          open={openAgendaDetailsModal}
          setOpen={setOpenAgendaDetailsModal}
        />
      )}
        {timeRange === "day" ? (
          <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
            <Box
              sx={{
                backgroundColor: "#72448F",
                height: 30,
                width: 30,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {new Date().getDate()}
              </Typography>
            </Box>
            <Box sx={{ ml: 1, transform: "translateY(2px)" }}>
              <Typography
                sx={{
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: "14px",
                }}
              >
                {monthNames[new Date().getMonth()]}
              </Typography>
              <Typography sx={{ fontSize: 11 }}>
                {dayNames[new Date().getDay()]}
              </Typography>
            </Box>
          </Box>
        ) : timeRange === "week" ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: 40,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              13-20{" "}
              <span style={{ fontWeight: 400 }}>
                {monthNames[new Date().getMonth()]}
              </span>
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
            <Typography
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {monthNames[new Date().getMonth()]}{" "}
              <span style={{ fontWeight: 400 }}>
                {" "}
                {new Date().getFullYear()}
              </span>
            </Typography>
          </Box>
        )}
        <Button
          color="inherit"
          sx={{
            padding: 0,
            backgroundColor: "rgb(0,0,0,0.06)",
            "&:hover": { backgroundColor: "rgb(0,0,0,0.12)" },
            borderRadius: 2,
            height: 24,
            width: 24,
            minWidth: 0,
            display: timeRange === "agenda" ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: 1,
          }}
        >
          <ArrowBackIosNewRoundedIcon sx={{ color: "#72448F", fontSize: 16 }} />
        </Button>
        <Button
          color="inherit"
          sx={{
            padding: 0,
            backgroundColor: "rgb(0,0,0,0.06)",
            "&:hover": { backgroundColor: "rgb(0,0,0,0.12)" },
            borderRadius: 2,
            height: 24,
            width: 24,
            minWidth: 0,
            display: timeRange === "agenda" ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: "5px",
          }}
        >
          <ArrowForwardIosRoundedIcon sx={{ color: "#72448F", fontSize: 16 }} />
        </Button>
      </Box>
    );
  };
  return (
    <Page title="Agenda">
      <Box className="container">
        <Hidden smUp={true}>
          <NavigationBar active="Agenda" />
          <AgendaSidebar
            setType={setTimeRange}
            show={showSidebar}
            setShow={setShowSidebar}
          />
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{ position: "fixed", zIndex: 100, backgroundColor: "white" }}
            >
              <div className={styles.header}>
                <div className={styles.row}>
                  <ButtonBase
                    sx={{
                      // minWidth: "40px",
                      // maxWidth: "40px",
                      height: "100%",padding:1,
                      position: "relative",
                      borderRadius: 1,
                    }}
                    onClick={() => setShowSidebar(true)}
                  >
                    <div className={styles.hamburger}>
                      <Image
                        src={Hamburger}
                        alt="Hamburger Icon"
                        layout="fill"
                      />
                    </div>
                <Typography sx={{fontFamily:"'Ubuntu',sans-serif", fontWeight:600, fontSize:16, ml:1 }}>Agenda</Typography>
                  </ButtonBase>
                  {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 1,
                  borderRadius: 1,
                  height: "100%",
                }}
              >
                <div className={styles.heading}>{month}</div>
                <div className={styles.arrow}>
                  <Image src={ArrowBottom} alt="Dropdown Arrow" layout="fill" />
                </div>
              </Box> */}
                </div>
                {/* <div className={styles.row}>
              <ButtonBase
                sx={{
                  minWidth: "25px",
                  maxWidth: "25px",
                  height: "100%",
                  position: "relative",
                  marginLeft: "10px",
                  borderRadius: 1,
                }}
              >
                <div className={styles.headerIconContainer}>
                  <Image src={Search} alt="Search Icon" layout="fill" />
                </div>
              </ButtonBase>{" "}
              <ButtonBase
                sx={{
                  minWidth: "20px",
                  maxWidth: "20px",
                  height: "100%",
                  position: "relative",
                  marginLeft: "10px",
                }}
              >
                <div className={styles.headerIconContainer}>
                  <Image src={Kebab} alt="Kebab Icon" layout="fill" />
                </div>
              </ButtonBase>
            </div> */}
              </div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  width: "100%",
                  padding: "4px 16px",
                  border: "1px solid rgb(0,0,0,0.12)",
                  // backgroundColor:"red"
                }}
              >
                {timeShow()}
                {/* <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{
                  alignSelf: "flex-end",
                  borderRadius: "20px",
                  alignContent: "flex-end",
                  textTransform: "none",
                  height: "100%",
                }}
                onClick={() => props.setOpen(true)}
              >
                <PostIcon style={{ height: 13, width: 13 }} color="white" />
                <Typography
                  sx={{
                    fontFamily: "'Ubuntu', sans-serif;",
                    fontWeight: 500,
                    fontSize: 12,
                    ml: 1,
                  }}
                >
                  Buat
                </Typography>
              </Button>
            </Box> */}
              </Box>
            </Box>

            {timeRange === "day" ? (
              <AgendaDay setOpen={setOpenAgendaDetailsModal} />
            ) : timeRange === "week" ? (
              <AgendaWeek setOpen={setOpenAgendaDetailsModal} />
            ) : timeRange === "month" ? (
              <AgendaMonth setOpen={setOpenAgendaDetailsModal} />
            ) : (
              <AgendaAgenda />
            )}
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

export default Agenda;
