import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import menuIcon from "assets/img/menu.png";
import logo from "assets/img/logo.png";
import styles from "assets/jss/navbarStyles";

const useStyles = makeStyles(styles);

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box className={classes.sidebar}>
          <Box display="flex">
            <IconButton sx={{ marginLeft: "auto" }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className={classes.mobileNav}>
            <Button
              sx={{ padding: 0, fontSize: "16px", marginBottom: "24px" }}
              className={classes.connectWalletBtnXsScreen}
            >
              CONNECT
            </Button>
            <Link
              onClick={() => {
                handleClose();
              }}
              to="/"
              underline="none"
            >
              HOME
            </Link>
            <Link
              onClick={() => {
                handleClose();
              }}
              to="/positions"
              underline="none"
            >
              POSITIONS
            </Link>
            <Link
              onClick={() => {
                handleClose();
              }}
              to="/admin"
              underline="none"
            >
              ADMIN
            </Link>
          </Box>
        </Box>
      </Drawer>
      <Box position="relative" className={classes.navbar}>
        <Box
          className={classes.navbarInner}
          display="flex"
          mx="auto"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Link to="/">
              <img src={logo} alt="" width={168} />
            </Link>
          </Box>
          <Box className={classes.navLinks}>
            <Link className={classes.linkItem} to="/" underline="none">
              HOME
            </Link>
            <Link className={classes.linkItem} to="/positions" underline="none">
              POSITIONS
            </Link>

            <Link className={classes.linkItem} to="/admin" underline="none">
              ADMIN
            </Link>

            <Button className={classes.connectWalletBtn}>CONNECT</Button>
          </Box>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            className={classes.drawerStack}
          >
            <Button
              className={clsx(classes.mobileButton, classes.connectWalletBtn)}
            >
              CONNECT
            </Button>
            <IconButton onClick={handleOpen}>
              <img src={menuIcon} alt="" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
