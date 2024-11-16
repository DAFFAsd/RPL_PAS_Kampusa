import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
// import Container from "../general/Container";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

export default function AddMemberModal(props) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    marginRight: theme.spacing(1),
    marginLeft: 0,
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      backgroundColor: "rgb(0,0,0,0.06)",
      borderRadius: "25px",
      height: 14,
    },
  }));

  let [search, setSearch] = useState("elai");

  let newMembers = [
    {
      imgUrl: "https://source.unsplash.com/user/erondu/100x100",
      name: "Asad Muhammad",
      email: "asadomu@gmail.com",
    },
    {
      imgUrl: "https://source.unsplash.com/random/100x100",
      name: "Chrisdian Provita Bella",
      email: "cpbella@gmail.com",
    },
  ];

  useEffect(() => {
    document.activeElement.blur();
  }, []);

  return (
    <Modal
      open={props.open}
      onClose={() => {
        props.setOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: 0,
          flexDirection: "column",
          width: "90vw",
          maxWidth: 400,
          backgroundColor: "white",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            padding: 1,
            display: "flex",
          }}
        >
          <Search sx={{ width: "100%" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cari Pengguna"
              inputProps={{ "aria-label": "search", style: { fontSize: 12 } }}
              value={search}
              key="AddMemberSearch"
              autoFocus
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </Search>
          <Button
            variant="contained"
            sx={{
              alignSelf: "flex-end",
              borderRadius: "20px",
              alignContent: "flex-end",
              textTransform: "none",
              height: 30,
              minWidth: 60,
              padding: 0,
            }}
            //   onClick={()=>setOpenAddMemberModal(true)}
          >
            <Typography
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontWeight: 500,
                fontSize: 12,
              }}
            >
              Cari
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid rgb(0,0,0,0.12)",
            display: "flex",
            padding: "0 16px",
            alignItems: "center",
            flexDirection: "column",
            height: 180,
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width:"100%"
            }}
          >
            <Box
              sx={{
                flex: 1,
                padding: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "25px",
                  height: 30,
                  width: 30,
                  overflow: "hidden",
                  mr: 1,
                }}
              >
                <Image
                  src={"https://source.unsplash.com/collection/1240/100x100"}
                  height={30}
                  width={30}
                  alt="image"
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                Elaina Aurylia
              </Typography>
            </Box>
            {/* <Box sx={{ padding: 1 }}> */}
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  textTransform: "none",
                  borderRadius: 25,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Ubuntu', sans-serif;",
                    fontWeight: 500,
                    fontSize: 11,
                    color: "white",
                  }}
                >
                  Tambahkan
                </Typography>
              </Button>
            {/* </Box> */}
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid rgb(0,0,0,0.12)",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Box sx={{ padding: 1, borderBottom: "1px solid rgb(0,0,0,0.12)" }}>
            <Typography
              sx={{
                fontFamily: "'Ubuntu', sans-serif;",
                fontWeight: 500,
                fontSize: 13,
              }}
            >
              Anggota Baru ({newMembers.length})
            </Typography>
          </Box>
          <Box sx={{ height: 180, overflowY: "scroll" }}>
            <Box>
              {newMembers.map((member) => (
                <Box
                  key={member.name}
                  sx={{ padding: 1, margin: "6px 8px", borderRadius: 3 }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "25px",
                        height: 30,
                        width: 30,
                        overflow: "hidden",
                        mr: 1,
                      }}
                    >
                      <Image src={member.imgUrl} height={30} width={30} alt="image" />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      {member.name}
                    </Typography>
                    {/* <Typography
                      sx={{
                        fontFamily: "'Ubuntu', sans-serif;",
                        fontWeight: 400,
                        fontSize: 11,
                        ml: "4px",
                      }}
                    >
                      ({member.email})
                    </Typography> */}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid rgb(0,0,0,0.12)",
          }}
        >
          <Button
            onClick={() => {
              props.setOpen(false);
            }}
            sx={{
              flex: 1,
              textTransform: "none",
              color: "#2A393F",
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 500,
              borderRight: "1px solid rgb(0,0,0,0.12)",
            }}
          >
            Batal
          </Button>
          <Button
            onClick={() => {
              props.setOpen(false);
            }}
            sx={{
              flex: 1,
              textTransform: "none",
              color: "#72448F",
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 500,
            }}
          >
            Simpan
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
