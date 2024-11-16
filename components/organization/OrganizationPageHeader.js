import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Search from "/public/images/Search.svg";
import Home from "/public/images/Home.js";

import Button from "@material-ui/core/Button";

import styles from "./OrganizationHeader.module.css";
import LogoKampusa from "/public/images/LogoKampusa.jpg";
import LeftArrow from "/public/images/LeftArrow";
import { ButtonBase, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

function OrganizationPageHeader(props) {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const router = useRouter();
  return (
    <Box
      className={styles.container}
      sx={{
        height: "fit-content",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "fixed",
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: 70,
          padding: "3px 8px",
          alignItems: "center",
          width:"100%"
        }}
      >
        {/* <Link passHref={true}  href="/organization"> */}
        <ButtonBase
          sx={{ borderRadius: 2, height: 26, padding: "4px", mb: 2 }}
          onClick={() => router.back()}
        >
          <LeftArrow
            style={{
              minWidth: "18px",
              maxWidth: "18px",
              height: "18px",
              position: "relative",
              fill: "#2A393F",
            }}
          />
        </ButtonBase>
        {/* </Link> */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
          <Box
            sx={{
              boxShadow: "0px 0px 5px rgb(0,0,0,0.3)",
              height: 45,
              width: 45,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              data-testid="close-icon"
              src={LogoKampusa}
              alt="Kampusa Logo"
              height={45}
              width={45}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", ml: "4px" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 12,
                fontFamily: "'Ubuntu', sans-serif;",
                ml: 1,
                //   lineHeight: "18px",
              }}
            >
              Organisasi Kampusa
            </Typography>
            <Typography
              sx={{
                fontSize: 11,
                ml: 1,
                lineHeight: "15px",
              }}
            >
              Universitas Temui
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          borderTop: "1px solid #D9D9D9",
        }}
      >
        {/* <Link passHref={true}  href="/organization/kampusa.id"> */}
          <ButtonBase
          onClick={() => router.replace('/organization/kampusa.id')}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
              borderBottom:
                props?.page === "home"
                  ? "2px solid #72448F"
                  : "2px solid #D9D9D9",
            }}
          >
            <Typography
              sx={{
                fontWeight: props?.page === "home" ? 600 : 500,
                fontSize: 11,
                fontFamily: "'Ubuntu', sans-serif;",
                color: props?.page === "home" ? "#72448F" : "#949C9F",
              }}
            >
              Beranda
            </Typography>
          </ButtonBase>
        {/* </Link> */}

        {/* <Link passHref={true}  href="/organization/kampusa.id/profile"> */}
          <ButtonBase onClick={() => router.replace('/organization/kampusa.id/profile')}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
              borderBottom:
                props?.page === "profile"
                  ? "2px solid #72448F"
                  : "2px solid #D9D9D9",
            }}
          >
            <Typography
              sx={{
                fontWeight: props?.page === "profile" ? 600 : 500,
                fontSize: 11,
                fontFamily: "'Ubuntu', sans-serif;",
                color: props?.page === "profile" ? "#72448F" : "#949C9F",
              }}
            >
              Profil
            </Typography>
          </ButtonBase>
        {/* </Link> */}

        {/* <Link passHref={true}  href="/organization/kampusa.id/post"> */}
          <ButtonBase onClick={() => router.replace('/organization/kampusa.id/post')}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
              borderBottom:
                props?.page === "post"
                  ? "2px solid #72448F"
                  : "2px solid #D9D9D9",
            }}
          >
            <Typography
              sx={{
                fontWeight: props?.page === "post" ? 600 : 500,
                fontSize: 11,
                fontFamily: "'Ubuntu', sans-serif;",
                color: props?.page === "post" ? "#72448F" : "#949C9F",
              }}
            >
              Post
            </Typography>
          </ButtonBase>
        {/* </Link> */}
        {/* <Link passHref={true}  href="/organization/kampusa.id/agenda"> */}
          <ButtonBase onClick={() => router.replace('/organization/kampusa.id/agenda')}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
              borderBottom:
                props?.page === "agenda"
                  ? "2px solid #72448F"
                  : "2px solid #D9D9D9",
            }}
          >
            <Typography
              sx={{
                fontWeight: props?.page === "agenda" ? 600 : 500,
                fontSize: 11,
                fontFamily: "'Ubuntu', sans-serif;",
                color: props?.page === "agenda" ? "#72448F" : "#949C9F",
              }}
            >
              Agenda
            </Typography>
          </ButtonBase>
        {/* </Link> */}

        {/* <Link passHref={true}  href="/organization/kampusa.id/program"> */}
          <ButtonBase onClick={() => router.replace('/organization/kampusa.id/program')}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
              borderBottom:
                props?.page === "program"
                  ? "2px solid #72448F"
                  : "2px solid #D9D9D9",
            }}
          >
            <Typography
              sx={{
                fontWeight: props?.page === "program" ? 600 : 500,
                fontSize: 11,
                fontFamily: "'Ubuntu', sans-serif;",
                color: props?.page === "program" ? "#72448F" : "#949C9F",
              }}
            >
              Program
            </Typography>
          </ButtonBase>
        {/* </Link> */}
      </Box>
    </Box>
  );
}

export default OrganizationPageHeader;
