/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React, { ReactNode } from "react";
import Login from "./Login";
import loginImage from "../assets/images/01.png";
import registerImage from "../assets/images/02.png";
import { Box, Button, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Register from "./Register";

export default function AlertDialog({ state }): ReactNode {
  const [open, setOpen] = React.useState(state);
  const [loginState, setLoginState] = React.useState(true);

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={false}
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
        }}
        PaperProps={{
          style: {
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            width: "70vw",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent sx={{ margin: 0, padding: 0, overflow: "hidden" }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "cenert",
                justifyContent: "center",
                width: "60%",
              }}
            >
              <Box
                onClick={handleClose}
                sx={{
                  display: "flex",
                  alignItems: "cenert",
                  justifyContent: "left",
                  gap: "1vh",
                  cursor: "pointer",
                  padding: "2vh",
                }}
              >
                <ArrowCircleLeftIcon />
                <Typography>Back</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#2B2B2B",
                  display: "inline-flex",
                  borderRadius: "10px",
                  padding: ".4vh",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: loginState ? "#f0b90b" : "#2B2B2B",
                    color: "white",
                    "&:hover": {
                      backgroundColor: loginState ? "#efc034" : "#505050",
                    },
                  }}
                  onClick={() => setLoginState(true)}
                >
                  Log in
                </Button>
                <Button
                  sx={{
                    backgroundColor: !loginState ? "#f0b90b" : "#2B2B2B",
                    color: "white",
                    "&:hover": {
                      backgroundColor: !loginState ? "#efc034" : "#505050",
                    },
                  }}
                  onClick={() => setLoginState(false)}
                >
                  Sing in
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "10vh",
                  paddingLeft: "20vh",
                  paddingRight: "20vh",
                }}
              >
                {loginState ? (
                  <Login clicker={handleClose} />
                ) : (
                  <Register clicker={handleClose} />
                )}
              </Box>
            </Box>
            <Box
              sx={{
                height: "35vw",
                width: "40%",
                backgroundColor: "#1C1C1C",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box padding={"5vh"} height={"100%"}>
                <Typography textAlign={"center"} variant="h5">
                  Welcome back to Quickbet Movies!
                </Typography>
                <br />
                {loginState ? (
                  <Typography textAlign={"center"}>
                    🍿 Ready to dive into the world of unlimited entertainment?
                    Enter your credentials and let the cinematic adventure
                    begin!
                  </Typography>
                ) : (
                  <Typography textAlign={"center"}>
                    🎬 Ready to unlock a universe of cinematic delights? Sign up
                    now and start your journey with us!
                  </Typography>
                )}
              </Box>
              <img
                style={{ width: "95%" }}
                src={loginState ? loginImage.src : registerImage.src}
              />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
