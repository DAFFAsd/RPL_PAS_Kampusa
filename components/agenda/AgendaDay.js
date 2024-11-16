import React, { useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function AgendaDay(props) {
  function createGrids() {
    let items = [];
    for (let i = 1; i <= 24; i++) {
      items.push(
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "50px 1fr",
          }}
        >
          <Box
            sx={{
              borderRight: "1px solid rgb(0,0,0,0.12)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              align="center"
              sx={{
                textTransform: "uppercase",
                fontSize: 10,
                mt: "2px",
                fontWeight: 400,
                color: "rgb(0,0,0,0.5)",
                transform: "translateY(20px)",
              }}
            >
              {i < 10 ? "0" + i : i}:00
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              border: "1px solid rgb(0,0,0,0.12)",
              height: 40,
            }}
          ></Box>
        </Box>
      );
    }
    return items;
  }

  let dayData = {
    sunday: [
      {
        title: "Gereja",
        description: "Masya Allah masih inget Tuhan",
        scope: "organization",
        isPublic: false,
        start: 10,
        duration: 4,
      },
    ],
    monday: [],
    tuesday: [
      {
        title: "Turnamen Mobile Legend bersama Alwi",
        description: "Gita dan Net Noob",
        scope: "group",
        isPublic: true,
        start: 8,
        duration: 3,
      },
      {
        title: "Weekly Meeting",
        description: "Google Meet",
        scope: "organization",
        isPublic: true,
        start: 20,
        duration: 2,
      },
    ],
    wednesday: [],
    thursday: [
      {
        title: "KASTRAT X SENI",
        scope: "organization",
        description: "Zoom",
        isPublic: false,
        start: 16,
        duration: 2,
      },
    ],
    friday: [
      {
        title: "Diligent Session",
        description: "Discord",
        scope: "organization",
        isPublic: false,
        start: 20,
        duration: 1,
      },
    ],
    saturday: [],
  };

  function generateButton(dayData) {
    return dayData.map((data) => (
        <Button
        key={data.title}
          color={data.scope === "organization" ? "primary" : "secondary"}
          variant={data.isPublic ? "contained" : "outlined"}
          sx={{
            backgroundColor: !data.isPublic ? "rgb(	114, 66, 144,0.15)" : null,
            "&:hover": {
              backgroundColor: !data.isPublic ? "rgb(	114, 66, 144,0.25)" : null,
            },
            textTransform: "none",
            margin: "0 1%",
            width: "98%",
            top: data.start * 40,
            height: data.duration * 40,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "5px",
            position: "absolute",
            color: "white",
          }}
          onClick={()=>props.setOpen(true)}
        >
          <Typography
            sx={{
              // whiteSpace: "nowrap",
              textAlign: "left",
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              // whiteSpace: "nowrap",
              textAlign: "left",
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 1 /* number of lines to show */,
              lineClamp: 1,
              WebkitBoxOrient: "vertical",
              fontSize: 11,
              fontWeight: 400,
            }}
          >
            {data.description}
          </Typography>
        </Button>
    ));
  }
  function generateClock(day) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: currentHour * 40 + (currentMinute / 60) * 40,
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "red",
            transform: "translateY(-5px) translateX(-5px)",
          }}
        ></Box>
        <Box sx={{ borderBottom: "2px solid red" }}></Box>
      </Box>
    );
  }
  let currentHour = new Date().getHours();
  let currentMinute = new Date().getMinutes();
  useEffect(() => {
    var el = document.getElementById("grid");
    el.scrollTop = currentHour * 40;
    // window.pageYOffset =currentHour * 40;
  });
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        pt:{xs:"100px",sm:0},
        paddingBottom: props?.hideNavbar?"0px": "60px",
      }}
    >
      <Box sx={{ position: "relative", mb: 2 }}>
        <Box
          id="grid"
          sx={{
            position: "absolute",
            display: "grid",
            gridTemplateColumns: "50px 1fr",
            width: "100%",
            height: "100%",
          }}
        >
          <Box />
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {generateButton(dayData.tuesday)}
            {generateClock()}
          </Box>
        </Box>
        {createGrids()}
      </Box>
    </Box>
  );
}

export default AgendaDay;
