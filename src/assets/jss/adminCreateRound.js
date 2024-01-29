const tableStyles = (theme) => ({
  block: {
    display: "flex",
    color: "white",
    margin: "auto",
    marginTop: '20px',
    width: "calc(100% - 48px)",
    maxWidth: "1320px",
  },
  header: {
    padding: "14px",
    backgroundColor: "#354352",
    borderTopLeftRadius: "14px",
    borderTopRightRadius: "14px",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  trow: {
    padding: "14px",
    display: "flex",
    alignItems: "center",
    "& .MuiBox-root": {
      width: "calc(100%/6)",
      textAlign: "center",
    },
  },
  tCell: {
    "&.MuiTableCell-root": {
      color: "white",
      fontSize: "16px",
      border: "none",
    },
  },
  tRows: {
    "&.MuiTableRow-root": {
      border: "0",
    },
  },
  scollBox: {
    margin: "15px 10px 15px 0",
    height: "70vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 7,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px #566979`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#d9d9d9",
      outline: `1px solid slategrey`,
      borderRadius: "3px",
    },
  },
  claimBtn: {
    "&.MuiButton-root": {
      padding: "10px 38px",
      borderRadius: "30px",
      backgroundColor: "#4166f4",
      color: "white",
      border: "none",
      "&:hover": {
        opacity: "0.8",
        backgroundColor: "#4166f4",
      },
    },
  },
  mainContainer: {
    position: "relative",
    marginTop: "20px",
    marginLeft: "6.5vw",
    marginRight: "6.5vw",
    [theme.breakpoints.down("md")]: {
      marginTop: "30px",
    },
  },
});

export default tableStyles;
