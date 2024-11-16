import {
  Typography,
  Box,
  Hidden,
  Button,
  ButtonBase,
  InputBase,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Page from "../../../components/general/Page";

import Image from "next/image";
import Link from "next/link";
import MemberIcon from "/public/images/MemberIcon.js";

import NavigationBar from "../../../components/general/NavigationBar";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import { styled, alpha } from "@mui/material/styles";
// import styles from "../../../components/Agenda/AgendaModal_Sidebar.module.css";
import PostIcon from "/public/images/PostIcon.js";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import OrganizationHeader from "../../../components/organization/OrganizationHeader";

import Search from "../../../public/images/Search.svg";
import TimeSolidIcon from "/public/images/TimeSolidIcon";
import { useRouter } from "next/router";
import Kebab from "/public/images/KebabIcon.svg";
import AddMemberModal from "../../../components/group/AddMemberModal";
import ManageMemberModal from "../../../components/group/ManageMemberModal";

function GroupMember() {
  let router = useRouter();
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
  useEffect(() => {
    document.activeElement.blur();
  }, []);

  let [search, setSearch] = useState("");
  const [openManageMemberModal, setOpenManageMemberModal] = useState(false);

  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);

  return (
    <Page title="Agenda">
      {openManageMemberModal && (
        <ManageMemberModal
          open={openManageMemberModal}
          setOpen={setOpenManageMemberModal}
        />
      )}
      {openAddMemberModal && (
        <AddMemberModal
          open={openAddMemberModal}
          setOpen={setOpenAddMemberModal}
        />
      )}
      <Box className="container">
        <Hidden smUp={true}>
          {/* <NavigationBar active="Agenda" /> */}
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                position: "fixed",
                width: "100%",
                zIndex: 100,
                backgroundColor: "white",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 50,
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ButtonBase
                  sx={{
                    //   backgroundColor: "rgb(0,0,0,0.06)",
                    //   "&:hover": { backgroundColor: "rgb(0,0,0,0.12)" },
                    borderRadius: 1,
                    height: "100%",
                    width: 20,
                    //   width:"40px",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 1,
                  }}
                  onClick={() => router.back()}
                >
                  <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18 }} />
                </ButtonBase>

                <Typography
                  sx={{
                    fontFamily: "'Ubuntu',sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    ml: 1,
                  }}
                >
                  People At Kampusa
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "0 16px 8px",
                  borderBottom: "1px solid rgb(0,0,0,0.12)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Search sx={{ width: { xs: "100%", sm: 250 } }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Cari Anggota"
                    inputProps={{
                      "aria-label": "search",
                      style: { fontSize: 12 },
                    }}
                    value={search}
                    key="PostSearch"
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                    autoFocus
                  />
                </Search>
                {/* <Link passHref={true}  href="/post/create"> */}
                <Button
                  variant="contained"
                  sx={{
                    alignSelf: "flex-end",
                    borderRadius: "20px",
                    alignContent: "flex-end",
                    textTransform: "none",
                    height: 30,
                  }}
                  onClick={()=>setOpenAddMemberModal(true)}
                >
                  <MemberIcon
                    color="white"
                    style={{ height: "15px", minWidth: "15px" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Ubuntu', sans-serif;",
                      fontWeight: 500,
                      fontSize: 12,
                      ml: "4px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    Tambah Anggota
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Ubuntu', sans-serif;",
                      fontWeight: 500,
                      fontSize: 12,
                      ml: "4px",
                      display: { xs: "block", sm: "none" },
                    }}
                  >
                    Tambah
                  </Typography>
                </Button>
                {/* </Link> */}
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontWeight: 600,
                  fontSize: 12,
                  padding: 2,
                  paddingBottom: 0,
                  ml: "4px",
                  mb:1,
                  display: { xs: "block", sm: "none" },
                }}
              >
                2 anggota
              </Typography>
              <Box sx={{ width: "100%" }}>
                <ButtonBase
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // m: "10px 0",
                    width: "100%",
                    padding: "8px 16px",
                  }}
                  onClick={()=>setOpenManageMemberModal(true)}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        height: 30,
                        width: 30,

                        borderRadius: "25px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image
                        src="https://source.unsplash.com/random/750x750"
                        width={100}
                        height={100} alt="image"
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 12,
                        // fontFamily: "'Ubuntu', sans-serif;",
                        ml: 1,
                        lineHeight: "15px",
                      }}
                    >
                      Elaina Aurylia
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", height: 25 }}
                  >
                    <Box
                      sx={{
                        fontSize: 10,
                        border: "1px solid rgb(32, 174, 142)",
                        color: "rgb(32, 174, 142)",
                        fontWeight: 500,
                        padding: "2px 4px",
                        borderRadius: 4,
                        // mr:1
                      }}
                    >
                      Admin
                    </Box>
                    {/* <ButtonBase
                      sx={{
                        borderRadius: 1,
                        height: "100%",
                        //   width:"40px",
                        justifyContent: "center",
                        alignItems: "center",
                        justifySelf: "flex-end",
                        padding: "4px",
                      }}
                    >
                      <Image
                        src={Kebab}
                        alt="Kebab Icon"
                        height={14}
                        width={14}
                      />
                    </ButtonBase> */}
                  </Box>
                </ButtonBase>
                <ButtonBase
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 16px",
                    width: "100%",
                  }}
                  onClick={()=>setOpenManageMemberModal(true)}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        height: 30,
                        width: 30,

                        borderRadius: "25px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image
                        src="https://source.unsplash.com/random/500x500"
                        width={100}
                        height={100} alt="image"
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 12,
                        // fontFamily: "'Ubuntu', sans-serif;",
                        ml: 1,
                        lineHeight: "15px",
                      }}
                    >
                      Anjanette Kalinemas
                    </Typography>
                  </Box>
                  {/* <Box
                    sx={{ display: "flex", alignItems: "center", height: 25 }}
                  >
                    <Box
                      sx={{
                        fontSize: 10,
                        border: "1px solid teal",
                        color: "rgb(32, 174, 142)",
                        fontWeight: 500,
                        padding: "2px 4px",
                        borderRadius: 4,
                        // mr:1
                      }}
                    >
                      Admin
                    </Box>
                  </Box> */}
                </ButtonBase>
              </Box>
            </Box>
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

export default GroupMember;
