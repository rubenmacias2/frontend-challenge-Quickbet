/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
// BasicAppBar.tsx
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
// BasicAppBar.tsx
"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Image from "next/image";
import logo from "../assets/images/QBLogo.svg";
import AlertDialog from "./AlertDialog";

const BasicAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#000000",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ ml: 4, mr: 4 }}
            >
              <Image src={logo} alt="Logo" />
            </IconButton>
          </Link>
          <Link href="/">
            <Button
              color="inherit"
              sx={{
                ml: 1,
                color: "white",
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              Populars
            </Button>
          </Link>
          <Link href="/favorites">
            <Button
              color="inherit"
              sx={{
                ml: 1,
                color: "white",
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              Favorites
            </Button>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            size="large"
            color="inherit"
            onClick={handleMenu}
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <AccountCircleIcon />
          </IconButton>
          <AlertDialog state={true} />
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Salir</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BasicAppBar;
