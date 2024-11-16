import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonBase } from "@mui/material";

function AgendaMonth(props) {
  function getDate() {
    let items = [
      {
        date: 31,
        month: 10,
        agenda: [],
      },

      {
        date: 1,
        month: 11,
        agenda: [
          { title: "Weekly Meeting", scope: "organization", isPublic: true },
          { title: "Kastrat X PIPTEK Meeting", scope: "organization" },
        ],
      },
      {
        date: 2,
        month: 11,
        agenda: [],
      },
      {
        date: 3,
        month: 11,
        agenda: [
          {
            title: "Dentist Appointment",
            scope: "organization",
            isPublic: true,
          },
        ],
      },
      {
        date: 4,
        month: 11,
        agenda: [],
      },
      {
        date: 5,
        month: 11,
        agenda: [],
      },
      {
        date: 6,
        month: 11,
        agenda: [{ title: "Nobar Little Mom", scope: "group", isPublic: true }],
      },
      {
        date: 7,
        month: 11,
        agenda: [],
      },

      {
        date: 8,
        month: 11,
        agenda: [
          { title: "Weekly Meeting", scope: "organization", isPublic: true },
        ],
      },
      {
        date: 9,
        month: 11,
        agenda: [],
      },
      {
        date: 10,
        month: 11,
        agenda: [],
      },
      {
        date: 11,
        month: 11,
        agenda: [{ title: "Malam Puisi", scope: "group", isPublic: true }],
      },
      {
        date: 12,
        month: 11,
        agenda: [],
      },
      {
        date: 13,
        month: 11,
        agenda: [],
      },
      {
        date: 14,
        month: 11,
        agenda: [],
      },

      {
        date: 15,
        month: 11,
        agenda: [
          { title: "Weekly Meeting", scope: "organization", isPublic: true },
        ],
      },
      {
        date: 16,
        month: 11,
        agenda: [],
      },
      {
        date: 17,
        month: 11,
        agenda: [],
      },
      {
        date: 18,
        month: 11,
        agenda: [],
      },
      {
        date: 19,
        month: 11,
        agenda: [],
      },
      {
        date: 20,
        month: 11,
        agenda: [
          { title: "Pengumpulan LPJ", scope: "organization", isPublic: false },
        ],
      },
      {
        date: 21,
        month: 11,
        agenda: [],
      },

      {
        date: 22,
        month: 11,
        agenda: [
          { title: "Weekly Meeting", scope: "organization", isPublic: true },
        ],
      },
      {
        date: 23,
        month: 11,
        agenda: [],
      },
      {
        date: 24,
        month: 11,
        agenda: [],
      },
      {
        date: 25,
        month: 11,
        agenda: [],
      },
      {
        date: 26,
        month: 11,
        agenda: [],
      },
      {
        date: 27,
        month: 11,
        agenda: [],
      },
      {
        date: 28,
        month: 11,
        agenda: [],
      },

      {
        date: 29,
        month: 11,
        agenda: [
          { title: "Weekly Meeting", scope: "organization", isPublic: true },
        ],
      },
      {
        date: 30,
        month: 11,
        agenda: [],
      },
      {
        date: 1,
        month: 12,
        agenda: [],
      },
      {
        date: 2,
        month: 12,
        agenda: [
          {
            title: "Turnamen Mobile Legend bersama",
            scope: "group",
            isPublic: true,
          },
        ],
      },
      {
        date: 3,
        month: 12,
        agenda: [],
      },
      {
        date: 4,
        month: 12,
        agenda: [],
      },
    ];

    return (
      <Box
        sx={{
          height:props?.hideNavbar?"calc(100vh - 137px)": "calc(100vh - 197px)",
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gridTemplateRows: "repeat(5,1fr)",
        }}
      >
        {items.map((item, index) => (
          <Box
            sx={{
              border: "1px solid rgb(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              minWidth: 45
            }}
            key={index}
          >
            <Typography
              align="center"
              sx={{
                fontSize: 11,
                mt: "5px",
                color: item.month !== 11 ? "rgb(0,0,0,0.5)" : "black",
              }}
            >
              {item.date}
            </Typography>
            {item.agenda.map((activity, index) => (
                <ButtonBase
                  sx={{ textTransform: "none", padding: "1px", margin: "1px", width:"98%", alignSelf:"center", borderRadius:"4px", backgroundColor: activity.scope==="organization" ? "#72448F":"rgb(32, 174, 142)", color:"white" }}
                  onClick={()=>props.setOpen(true)}
                  key={index}
                >
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      // textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontSize: 9,
                      fontWeight: 600,
                    }}
                  >
                    {activity.title}
                  </Typography>
                </ButtonBase>
            ))}
          </Box>
        ))}
      </Box>
    );

    // );
    // for (let i = 1; i <= 30; i++) {
    //   items.push(
    //     <Box
    //       sx={{
    //         border: "1px solid rgb(0,0,0,0.12)",
    //         display: "flex",
    //         flexDirection: "column",
    //       }}
    //     >
    //       <Typography
    //         align="center"
    //         sx={{ fontSize: 11, mt: "5px", color: "black" }}
    //       >
    //         {i}
    //       </Typography>
    //     </Box>
    //   );
    //   // console.log(i);
    // }
    // for (let i = 1; i <= 4; i++) {
    //   items.push(
    //     <Box
    //       sx={{
    //         border: "1px solid rgb(0,0,0,0.12)",
    //         display: "flex",
    //         flexDirection: "column",
    //       }}
    //     >
    //       <Typography
    //         align="center"
    //         sx={{ fontSize: 11, mt: "5px", color: "rgb(0,0,0,0.5)" }}
    //       >
    //         {i}
    //       </Typography>
    //     </Box>
    //   );
    // console.log(i);
    // }
    // return (
    //   <Box
    //     sx={{
    //       flex: 1,
    //       display: "grid",
    //       gridTemplateColumns: "repeat(7,1fr)",
    //       gridTemplateRows: "repeat(5,1fr)",
    //     }}
    //   >
    //     {items}
    //   </Box>
    // );
  }

  let day = new Date().getDay();
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        mt: { xs: "98px", sm: 0 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
        }}
      >
        <Box
          sx={{
            border: "1px solid rgb(0,0,0,0.12)",
            minWidth: 45,
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              padding: "5px",
              width: "60%",
              backgroundColor: "none",
              borderRadius: 5,
              width: 52,
            }}
          >
            <Typography
              align="center"
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 11,
                fontWeight: 600,
                color: "black",
              }}
            >
              Minggu
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(0,0,0,0.12)",
            minWidth: 45,
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: 5,
              width: 52,
            }}
          >
            <Typography
              align="center"
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Senin
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(0,0,0,0.12)",
            minWidth: 45,
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: 5,
              width:52
            }}
          >
            <Typography
              align="center"
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Selasa
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(0,0,0,0.12)",
            minWidth: 45,
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: 5,
              width:52
            }}
          >
            <Typography
              align="center"
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Rabu
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(0,0,0,0.12)",
            minWidth: 45,
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: 5,
              width: 52,
            }}
          >
            <Typography
              align="center"
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Kamis
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(0,0,0,0.12)",
            minWidth: 45,
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: 5,
              width: 52,
            }}
          >
            <Typography
              align="center"
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Jumat
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(0,0,0,0.12)",
            minWidth: 45,
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: 5,
              width: 52,
            }}
          >
            <Typography
              align="center"
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Sabtu
            </Typography>
          </Box>
        </Box>
      </Box>
      {getDate()}
    </Box>
  );
}

export default AgendaMonth;
