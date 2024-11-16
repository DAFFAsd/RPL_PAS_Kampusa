import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ParagraphIcon from "../../public/images/ParagraphIcon.svg";
import PenIcon from "../../public/images/PenIcon.svg";
import DeleteIcon from "../../public/images/DeleteIcon.svg";
import TimeIcon from "../../public/images/TimeIcon.svg";
import moment from "moment";

import FormControl from "@mui/material/FormControl";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterMoment from "@mui/lab/AdapterMoment";
import { ButtonBase } from "@mui/material";

export default function AgendaDetailsModal(props) {
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const [value, setValue] = useState(new Date());
  const [type, setType] = useState(0);
  const types = [
    {
      value: 0,
      label: "Event",
    },
    {
      value: 1,
      label: "Tugas",
    },
  ];
  const handleScopeChange = (event) => {
    setScope(event.target.value);
  };
  const [scope, setScope] = useState(0);
  const scopes = [
    {
      value: 0,
      label: "Grup",
    },
    {
      value: 1,
      label: "Organisasi",
    },
  ];

  let [isEdit, setIsEdit] = useState(false);

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
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          width: "90%",
          maxWidth: 400,
        }}
      >
        <Box
          sx={{
            padding: 2,
            paddingBottom: 0,
            display: "flex",
            flexDirection: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif;",
              fontSize: { xs: 14, sm: 16 },
              fontWeight: 600,
              flex: 1,
            }}
            variant="h2"
          >
            {isEdit ? "Edit Agenda" : "Detail Agenda"}
          </Typography>
          <Box sx={{ display: !isEdit?"flex":"none" }}>
            <ButtonBase
              sx={{ mr: 1, padding: "3px", borderRadius: "3px" }}
              onClick={() => setIsEdit(true)}
            >
              <Image src={PenIcon} height={12} width={15} alt="image"/>
            </ButtonBase>
            <ButtonBase sx={{ padding: "3px", borderRadius: "3px" }} 
              onClick={() => props.setOpen(false)}>
              <Image src={DeleteIcon} height={14} width={14} alt="image"/>
            </ButtonBase>
          </Box>
        </Box>
        <Box
          sx={{
            padding: 2,
            borderBottom: "1px solid rgb(0,0,0,0.12)",
            display: "flex",
          }}
        >
          {/* <Box
            sx={{
              //   display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              mr: 2,
              paddingTop: "4px",
            }}
          >
            <Image src={ParagraphIcon} height={15} width={15} />
          </Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flex: 1,
            }}
          >
            <FormControl sx={{ mb: 2 }}>
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                Nama Agenda
              </Typography>

              <TextField
                fullWidth
                hiddenLabel
                required
                sx={{ color: "#72448F" }}
                inputProps={{
                  style: {
                    color: "#2A393F",
                    fontFamily: "'Ubuntu', sans-serif;",
                    fontSize: 16,
                    fontWeight: 600,
                  },
                  readOnly: !isEdit,
                }}
                id="standard-hidden-label-normal"
                placeholder="Nama Agenda"
                defaultValue="Weekly Meeting"
                variant="standard"
              />
            </FormControl>

            <FormControl sx={{ mb: 2 }}>
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Deskripsi
              </Typography>
              <TextField
                hiddenLabel
                id="outlined-multiline-static"
                multiline
                rows={3}
                placeholder="Deskripsi"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                variant="filled"
                sx={{ color: "#72448F" }}
                inputProps={{
                  style: {
                    color: "#2A393F",
                    fontSize: 12,
                  },
                  readOnly: !isEdit,
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  fontWeight: 500,
                  mb: "4px",
                }}
              >
                Jenis
              </Typography>
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  display: isEdit ? "none" : "block",
                }}
              >
                Event
              </Typography>

              {isEdit ? (
                <TextField
                  id="outlined-select-type"
                  select
                  hiddenLabel
                  value={type}
                  onChange={handleTypeChange}
                  inputProps={{
                    style: {
                      borderColor: "#72448F",
                    },
                    readOnly: !isEdit,
                  }}
                >
                  {types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Typography sx={{ fontSize: 12 }}>
                        {option.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </TextField>
              ) : null}
            </FormControl>
            <FormControl>
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  fontWeight: 500,
                  mb: "4px",
                }}
              >
                Ruang Lingkup
              </Typography>

              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  display: isEdit ? "none" : "block",
                }}
              >
                Grup
              </Typography>
              {isEdit ? (
                <TextField
                  id="outlined-select-type"
                  select
                  hiddenLabel
                  value={scope}
                  onChange={handleScopeChange}
                  inputProps={{
                    style: {
                      borderColor: "#72448F",
                    },
                    readOnly: !isEdit,
                  }}
                >
                  {scopes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Typography sx={{ fontSize: 12 }}>
                        {option.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </TextField>
              ) : null}
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            padding: 2,
            width: "100%",
            display: "flex",
          }}
        >
          {/* <Box
            sx={{
              //   display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              mr: 2,
              paddingTop: "3px",
            }}
          >
            <Image src={TimeIcon} height={15} width={15} />
          </Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flex: 1,
            }}
          >
            <Box sx={{ display: isEdit ? "none" : "block" }}>
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  fontWeight: 500,
                  mb: "4px",
                }}
              >
                Waktu Mulai
              </Typography>
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  display: isEdit ? "none" : "block",
                }}
              >
                {moment(value).format("dddd, DD/MM/YYYY HH:MM")}
              </Typography>
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  fontWeight: 500,
                  mb: "4px",
                  mt: 2,
                }}
              >
                Waktu Selesai
              </Typography>
              <Typography
                sx={{
                  color: "#2A393F",
                  fontFamily: "'Ubuntu', sans-serif;",
                  fontSize: 12,
                  display: isEdit ? "none" : "block",
                }}
              >
                {moment(value).format("dddd, DD/MM/YYYY HH:MM")}
              </Typography>
            </Box>

            <Box sx={{ display: !isEdit ? "none" : "block" }}>
              {type === 0 ? (
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Waktu Mulai"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        inputProps={{
                          readOnly: !isEdit,
                        }}
                      />
                    </LocalizationProvider>
                  </Box>
                  <Box sx={{ mt: 2, mb: 2, display: "flex" }}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Waktu Selesai"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        inputProps={{
                          readOnly: !isEdit,
                        }}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ display: "flex", mb: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="Waktu"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Box>
              )}
            </Box>
            <Box
              sx={{ alignSelf: "flex-end", display: isEdit ? "flex" : "none" }}
            >
              <Button
                sx={{
                  borderRadius: "25px",
                  textTransform: "none",
                  width: 100,
                  mr: 1,
                }}
                onClick={() => props.setOpen(false)}
                variant="outlined"
              >
                Batal
              </Button>
              <Button
                sx={{
                  borderRadius: "25px",
                  textTransform: "none",
                  width: 100,
                  mr: 1,
                }}
                variant="contained"
                // disabled
                onClick={() => props.setOpen(false)}
              >
                Simpan
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
