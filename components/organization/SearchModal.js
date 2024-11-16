import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ButtonBase, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoKampusa from "/public/images/LogoKampusa.jpg";
import Link from "next/link";

export default function SearchModal(props) {
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

  let [search, setSearch] = useState("Kampusa");
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
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "50px",
            padding: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Search sx={{ width: "100%" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cari Organisasi"
              inputProps={{ "aria-label": "search", style: { fontSize: 12 } }}
              value={search}
              key="OrganizationSearch"
              autoFocus
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </Search>
        </Box>

        <Box
          sx={{
            maxHeight: "80vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link passHref={true}  href="/organization/kampusa.id">
            <ButtonBase sx={{ padding: 1, justifyContent: "flex-start" }}>
              <Box
                sx={{
                  height: 35,
                  width: 35,
                  borderRadius: "25px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image src={LogoKampusa} width={100} height={100} alt="image"/>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: 12,
                    ml: 1,
                    lineHeight: "15px",
                  }}
                >
                  Organisasi Kampusa
                </Typography>
              </Box>
            </ButtonBase>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
}
