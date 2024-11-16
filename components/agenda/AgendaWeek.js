import React, { useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function AgendaWeek(props) {
  function header() {
    let currentDay = new Date().getDay();
    let days = [
      { day: "Min", number: 0 },
      { day: "Sen", number: 1 },
      { day: "Sel", number: 2 },
      { day: "Rab", number: 3 },
      { day: "Kam", number: 4 },
      { day: "Jum", number: 5 },
      { day: "Sab", number: 6 },
    ];
    return days.map((day, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
          height:47,
          minWidth:32
          //   border: "1px solid rgb(0,0,0,0.12)",
          //   borderLeft: day.number === 0 ? "none" : "px solid rgb(0,0,0,0.12)",
        }}
      >
        <Box
          sx={{
            // padding: "5px 10px",
            backgroundColor: currentDay === day.number ? "#72448F" : "white",
            height: 15,
            width: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Typography
            align="center"
            sx={{
              fontFamily: "'Ubuntu', sans-serif;",
              fontSize: 11,
              fontWeight: 600,
              color: currentDay === day.number ? "white" : "black",
            }}
          >
            {day.number + 7}
          </Typography>
        </Box>

        <Typography
          align="center"
          sx={{
            textTransform: "uppercase",
            fontSize: 10,
            mt: "2px",
            fontWeight: 400,
            color: "rgb(0,0,0,0.5)",
          }}
        >
          {day.day}
        </Typography>
      </Box>
    ));
  }

  function createGrids() {
    let items = [];
    for (let i = 1; i <= 24; i++) {
      items.push(
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "50px repeat(7,1fr)",
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
              height: 40, minWidth:32
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              border: "1px solid rgb(0,0,0,0.12)",
              height: 40, minWidth:32
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              border: "1px solid rgb(0,0,0,0.12)",
              height: 40, minWidth:32
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              border: "1px solid rgb(0,0,0,0.12)",
              height: 40, minWidth:32
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              border: "1px solid rgb(0,0,0,0.12)",
              height: 40, minWidth:32
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              border: "1px solid rgb(0,0,0,0.12)",
              height: 40, minWidth:32
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              border: "1px solid rgb(0,0,0,0.12)",
              height: 40, minWidth:32
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
      <Link passHref={true}  href="/agenda/edit" key={data.title}>
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
            margin: "0 2%",
            width: "96%",
            top: data.start * 40,
            height: data.duration * 40,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "5px",
            position: "absolute",
          }}
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
      </Link>
    ));
  }

  function generateClock(day) {
    if (day === currentDay) {
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
  }
  let currentDay = new Date().getDay();
  let currentHour = new Date().getHours();
  let currentMinute = new Date().getMinutes();
  useEffect(() => {
    var el = document.getElementById("grid");

    el.scrollTop = currentHour * 40;
  });
  return (
    <Box
      id="grid"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        mt: { xs: "100px", sm: 0 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "50px repeat(7,1fr)",
          position: "fixed",
          backgroundColor:"white",
          zIndex: 100,
          width: {xs:"100%", sm:"calc(100vw - 141px)", md:"calc(100vw - 253px)"},
        }}
      >
        <Box
        />
        {header()}
      </Box>
      <Box sx={{ position: "relative", mt: "47px", mb:2, pb:props.hideNavbar?"0px":"60px" }}>
        {/* <Box
          sx={{
            position: "absolute",
            display: "grid",
            gridTemplateColumns: "80px repeat(7,1fr)",
            width: "100%",
            height: "100%",
          }}
        >
          <Box></Box>
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {generateButton(dayData.sunday)}
            {generateClock(0)}
          </Box>
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {generateButton(dayData.monday)}
            {generateClock(1)}
          </Box>
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {generateButton(dayData.tuesday)}
            {generateClock(2)}
          </Box>
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {generateButton(dayData.wednesday)}
            {generateClock(3)}
          </Box>
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {generateButton(dayData.thursday)}
            {generateClock(4)}
          </Box>
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {generateButton(dayData.friday)}
            {generateClock(5)}
          </Box>
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            {generateButton(dayData.saturday)}
            {generateClock(6)}
          </Box>
        </Box> */}
        {createGrids()}
      </Box>
    </Box>
  );
}

export default AgendaWeek;
