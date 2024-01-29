const tableStyles = (theme) => ({
  block: {
    marginTop: "20px",
    display: "flex",
    color: "white",
    border: "1px solid grey",
    margin: "auto",
    width: "calc(100% - 48px)",
    maxWidth: "1320px",
    [theme.breakpoints.down("md")]: {
      overflowX: "scroll!important",
    },
    "&.MuiPaper-root": {
      backgroundColor: "transparent",
      borderRadius: "32px",
    },
    "&::-webkit-scrollbar": {
      [theme.breakpoints.down("md")]: {
        width: 7,
      },
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
    "& a": {
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
  claimBtnWhite: {
    "&.MuiButton-root": {
      padding: "10px 38px",
      borderRadius: "30px",
      backgroundColor: "white",
      color: "#4166f4",
      border: "none",
      "&:hover": {
        opacity: "0.8",
        backgroundColor: "white",
      },
    },
  },
  openRoundButton: {
    color: "white !important",
  },
  mainContainer: {
    position: "relative",
    marginTop: "20px",
    marginLeft: "6.5vw",
    marginRight: "6.5vw",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
  },
  emptyTable: {
    color: "white",
    "& p": {
      fontSize: "24px",
    },
  },
  sorter: {
    color: "white",
    "&.MuiOutlinedInput-root, &.MuiSelect-standard,&.MuiSelect-select, &.MuiInputBase-root, &.MuiSelect-root, &.MuiSelect-outlined, &.MuiInputBase-colorPrimary":
      {
        color: "white !important",
        borderRadius: "24.5px",
        height: "49px",
        width: "140px",
        backgroundColor: "#35414E",
        outline: "none !important",
        marginTop: 0,
        textAlign: "left",
        paddingLeft: "15px",
      },
  },
  categorySorter: {
    color: "white",
    "& .MuiOutlinedInput-root, &.MuiSelect-standard,&.MuiSelect-select, &.MuiInputBase-root, &.MuiSelect-root, &.MuiSelect-outlined, &.MuiInputBase-colorPrimary":
      {
        color: "white !important",
        borderRadius: "24.5px",
        height: "49px",
        width: "140px",
        backgroundColor: "#35414E",
        outline: "none !important",
        marginTop: 0,
        textAlign: "left",
        paddingLeft: "15px",
      },
  },
  sortBy: {
    color: "white",
  },
  categories: {
    textAlign: "left",
  },
  timeStamp: {
    display: "flex",
    justifyContent: "center",
  },
  divider: {
    margin: "0px 10px",
    width: "1.24px",
    backgroundColor: "white",
  },
  timeStampTitle: {
    "&.MuiTypography-root": {
      color: "#818892",
      fontWeight: "500",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  checboxContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "25px!important",
    [theme.breakpoints.down("md")]: {
      marginBottom: "20px",
    },
  },

  checkbox: {
    "&.MuiCheckbox-root": {
      padding: "0",
      marginRight: "8px",
    },
  },
  filterContainer: {
    maxWidth: "1320px",
    margin: "0 auto",
    marginTop: "74px",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  tLink: {
    textDecoration: "none",
  },
});

export default tableStyles;
