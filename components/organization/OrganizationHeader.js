import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Search from "/public/images/Search.svg";
import Home from "/public/images/Home.js";

import Button from "@material-ui/core/Button";

import styles from "./OrganizationHeader.module.css";
import KampusaLogo from "/public/images/Kampusa_Logo.svg";
import { ButtonBase, Box } from "@mui/material";
import SearchModal from "./SearchModal";

function OrganizationHeader(props) {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  return (
    <div className={styles.container}>
      {openSearchModal && (
        <SearchModal open={openSearchModal} setOpen={setOpenSearchModal} />
      )}
      <Image
        data-testid="close-icon"
        src={KampusaLogo}
        alt="Kampusa Logo"
        height={25}
        width={35}
      />
      <Box>
        <ButtonBase
          sx={{
            borderRadius: "8px",
            padding: "8px",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
          }}
          onClick={()=>setOpenSearchModal(true)}
        >
          <Image
            data-testid="close-icon"
            src={Search}
            alt="Kampusa Logo"
            height={16}
            width={16}
          />
        </ButtonBase>
      </Box>
    </div>
  );
}

export default OrganizationHeader;
