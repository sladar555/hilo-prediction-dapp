import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./navbar";
import Footer from "components/footer";

const Layout = (props) => {
  const { children } = props;

  return (
      <Box>
        <Navbar />
        {children}
        <Footer />
      </Box>
  );
};

export default Layout;
