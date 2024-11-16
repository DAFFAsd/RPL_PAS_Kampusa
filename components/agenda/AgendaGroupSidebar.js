import React, { useState } from "react";
import Image from "next/image";

import styles from "./AgendaGroup.module.css";

import LogoType from "/public/images/Kampusa_LogoType_Black.svg";
import Agenda from "/public/images/AgendaSidebar_Agenda.svg";
import Day from "/public/images/AgendaSidebar_Day.svg";
import Week from "/public/images/AgendaSidebar_Week.svg";
import Month from "/public/images/AgendaSidebar_Month.svg";
import ArrowBottom from "/public/images/Arrow_Bottom.svg";
import Search from "/public/images/Search.svg";

import {
  Box,
  ButtonBase,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputBase,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function AgendaGroupSidebar(props) {
  let [expandMember, setExpandMember] = useState(true);
  let Router=useRouter()
  return (
    <Modal
      open={props.show}
      onClose={() => props.setShow(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box
        sx={{
          background: "white",
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid rgb(0,0,0,0.13)",
            padding: 2,
          }}
        >
          <div className={styles.logoType}>
            <Image src={LogoType} alt="LogoType Kampusa" layout="fill" />
          </div>
          <ButtonBase
            sx={{ padding: 1, borderRadius: 1, justifyContent: "flex-start" }}
            onClick={() => [props.setType("agenda"), props.setShow(false)]}
          >
            <div className={styles.agendaTypeIcon}>
              <Image src={Agenda} alt="Agenda Icon" layout="fill" />
            </div>
            <span className={styles.agendaTypeText}>Agenda</span>
          </ButtonBase>
          <ButtonBase
            sx={{ padding: 1, borderRadius: 1, justifyContent: "flex-start" }}
            onClick={() => [props.setType("day"), props.setShow(false)]}
          >
            <div className={styles.agendaTypeIcon}>
              <Image src={Day} alt="Day Icon" layout="fill" />
            </div>
            <span className={styles.agendaTypeText}>Hari</span>
          </ButtonBase>
          <ButtonBase
            sx={{ padding: 1, borderRadius: 1, justifyContent: "flex-start" }}
            onClick={() => [props.setType("week"), props.setShow(false)]}
          >
            <div className={styles.agendaTypeIcon}>
              <Image src={Week} alt="Week Icon" layout="fill" />
            </div>
            <span className={styles.agendaTypeText}>Minggu</span>
          </ButtonBase>
          <ButtonBase
            sx={{ padding: 1, borderRadius: 1, justifyContent: "flex-start" }}
            onClick={() => [props.setType("month"), props.setShow(false)]}
          >
            <div className={styles.agendaTypeIcon}>
              <Image src={Month} alt="Month Icon" layout="fill" />
            </div>
            <span className={styles.agendaTypeText}>Bulan</span>
          </ButtonBase>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid rgb(0,0,0,0.13)",
            padding: 2,
          }}
        >
          <span className={styles.heading}>Filter Agenda</span>
          <FormGroup>
            <FormControlLabel
              style={{ margin: 0, marginTop: 10, height: 25 }}
              control={
                <Checkbox
                  sx={{
                    color: "#20AE8E",
                    "&$checked": {
                      color: "#20AE8E",
                    },
                  }}
                  color="secondary"
                  name="Agenda"
                />
              }
              label={<span className={styles.filterText}>Personal</span>}
            />
            <FormControlLabel
              style={{ margin: 0, height: 25 }}
              control={
                <Checkbox
                  sx={{
                    color: "#20AE8E",
                    "&$checked": {
                      color: "#20AE8E",
                    },
                  }}
                  color="secondary"
                  name="Grup"
                />
              }
              label={<span className={styles.filterText}>Grup</span>}
            />
          </FormGroup>
        </Box>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid rgb(0,0,0,0.13)",
            padding: 2,
          }}
        >
          <ButtonBase
            sx={{
              textTransform: "none",
              width: "100%",
              height: "45px",
              justifyContent: "flex-start",
              padding: 0,
              borderRadius: 1,
            }}
            onClick={() => setExpandMember(!expandMember)}
          >
            <div className={styles.heading}>Anggota</div>
            <div
              className={styles.arrow}
              style={{
                transform: expandMember ? "rotateX(180deg)" : null,
              }}
            >
              <Image src={ArrowBottom} alt="Dropdown Arrow" layout="fill" />
            </div>
          </ButtonBase>
          {expandMember && (
            <Box>
              <div className={styles.searchContainer}>
                <div className={styles.search}>
                  <Image src={Search} alt="Dropdown Arrow" layout="fill" />
                </div>
                <InputBase
                  style={{ fontSize: 12 }}
                  placeholder="Cari Anggota"
                />
              </div>
              <div className={styles.selectContainer}>
                  <ButtonBase
                    sx={{
                      textTransform: "none",
                      width: "100%",
                      justifyContent: "flex-start",
                      textAlign: "left",
                      fontWeight: 400,
                      padding: 1,
                      borderRadius: 1,
                    }}
                  >
                    <span className={styles.selectText}>Select All</span>
                  </ButtonBase>

                <Checkbox
                  sx={{
                    color: "#20AE8E",
                    "&$checked": {
                      color: "#20AE8E",
                    },
                  }}
                  color="secondary"
                />
              </div>
              <div className={styles.selectContainer}>
                <Link passHref={true}  href="/organization/kampusa.id">
                <ButtonBase
                  sx={{
                    textTransform: "none",
                    width: "100%",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    fontWeight: 400,
                    borderRadius: 1,
                    padding: 1,
                  }}
                >
                  <div className={styles.row}>
                    <div className={styles.photoContainer}>
                      <Image
                        src="https://source.unsplash.com/random/500x500"
                        alt="Dropdown Arrow"
                        layout="fill"
                      />
                    </div>
                    <div className={styles.column}>
                      <span className={styles.selectHeading}>
                        M. Alwi Sukra
                      </span>
                      {/* <span className={styles.selectDescription}>
                        5 Members
                      </span> */}
                    </div>
                  </div>
                </ButtonBase>
                </Link>
                <Checkbox
                  sx={{
                    color: "#20AE8E",
                    "&$checked": {
                      color: "#20AE8E",
                    },
                  }}
                  color="secondary"
                />
              </div>
              <div className={styles.selectContainer}>
                <Link passHref={true}  href="/organization/kampusa.id">
                <ButtonBase
                  sx={{
                    textTransform: "none",
                    width: "100%",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    fontWeight: 400,
                    borderRadius: 1,
                    padding: 1,
                  }}
                >
                  <div className={styles.row}>
                    <div className={styles.photoContainer}>
                      <Image
                        src="https://source.unsplash.com/random/600x600"
                        alt="Dropdown Arrow"
                        layout="fill"
                      />
                    </div>
                    <div className={styles.column}>
                      <span className={styles.selectHeading}>
                        Melina Anggita
                      </span>
                      {/* <span className={styles.selectDescription}>
                        5 Members
                      </span> */}
                    </div>
                  </div>
                </ButtonBase>
                </Link>
                <Checkbox
                  sx={{
                    color: "#20AE8E",
                    "&$checked": {
                      color: "#20AE8E",
                    },
                  }}
                  color="secondary"
                />
              </div>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

export default AgendaGroupSidebar;
