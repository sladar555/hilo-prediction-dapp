import React from "react";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import styles from "assets/jss/footerStyles";

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box
        display="flex"
        justifyContent="center"
        className={classes.socialLinks}
      >
        <Link to="/">HOME</Link>
        <a target="_blank" href="https://www.hilodapp.com">
          ABOUT
        </a>
        <a href="https://hilo-1.gitbook.io/hilo-white-paper/" target="_blank">
          WHITEPAPER
        </a>
        <a href="mailto:Support@hilodapp.com">CONTACT</a>
      </Box>
    </Box>
  );
};

export default Footer;
