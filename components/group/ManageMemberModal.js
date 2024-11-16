import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ButtonBase } from "@mui/material";

export default function ManageMemberModal(props) {
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
          backgroundColor: "white",
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          width: "90vw",
        }}
      >
        <ButtonBase
          sx={{
            fontSize: 12,
            padding: 1,
            borderBottom: "1px solid rgb(0,0,0,0.13)",
            justifyContent:"flex-start",
            textAlign:"left"
          }}
        >
          Jadikan Anjanette Kalinemas sebagai admin.
        </ButtonBase>
        <ButtonBase
          sx={{
            fontSize: 12,
            padding: 1,
            justifyContent:"flex-start",
            textAlign:"left"
          }}
        >
          Keluarkan Anjanette Kalinemas dari grup.
        </ButtonBase>
      </Box>
    </Modal>
  );
}
