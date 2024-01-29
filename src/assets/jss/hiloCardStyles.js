const hiloCardStyles = (theme) => ({
  blockContainer: {
    height: "101%",
    maxWidth: "460px",
    borderRadius: "30px",
    backgroundColor: "#0e1e31",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      maxWidth: "97%",
      fontSize: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "460px",
    },
  },
  descriptionLinksContainer: {
    width: "800px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      fontSize: "1rem",
      flexWrap: "wrap",
      gap: "1",
    },
  },
  iconGridBox: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "0!important",
    },
  },
  iconLinks: {
    height: "40px",
    width: "40px",
  },
  confirmBtns: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "ceter",
    gap: "10px",
    "& .MuiButton-root": {
      width: "130px",
      padding: "12px",
      backgroundColor: "#4166F4",
      borderRadius: "12px",
      marginLeft: "10px",
      color: "white",
      // fontSize: "20px",
      fontWeight: "500",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "#4166F4",
      opacity: "0.7",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "24px",
    backgroundColor: "#1a326a",
    borderTopLeftRadius: "32px",
    borderTopRightRadius: "32px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  status: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    "& p": {
      color: "white",
      fontSize: "23px",
      fontWeight: "500",
      lingHeight: "27px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
  },

  time: {
    display: "flex",
    alignItems: "center",
    "& span": {
      color: "white!important",
    },
  },
  timeStampTitle: {
    "&.MuiTypography-root": {
      color: "#818892",
      fontWeight: "500",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
  },
  divider: {
    margin: "0px 10px",
    width: "1.24px",
    backgroundColor: "white",
    height: "100%",
  },
  infoIconButton: {
    color: "white !important",
  },
  progressBar: {
    "& .MuiLinearProgress-root": {
      height: "11px",
      backgroundColor: "white",
    },
    "& .MuiLinearProgress-bar": {
      backgroundColor: "#4166F4",
      height: "11px",
    },
  },
  mainBox: {
    padding: "25px",
  },
  laterBox: {
    display: "flex",
    flexDirection: "column",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    "& p": {
      fontSize: "29px",
      color: "#818892",
    },
    "& h3": {
      fontSize: "88px",
      color: "white",
    },
  },
  cardHeader: {
    "& p": {
      fontSize: "23px",
      color: "white",
    },
  },
  graph: {
    "&.MuiButton-root": {
      padding: "13px",
      backgroundColor: "#031225",
      borderRadius: "50%",
    },
  },
  priceBox: {
    borderRadius: "12px",
    padding: "20px",
    marginTop: "15px",
    minHeight: "256px",
  },
  topBox: {
    marginBottom: "39px",
    "& p": {
      fontSize: "29px",
      color: "#FFFFFF58",
    },
    "& h1": {
      color: "#E0E3E7",
      fontSize: "40px",
    },
    "& .MuiTextField-root": {
      marginBottom: "15px",
    },
  },
  tokenBox: {
    display: "flex",
    alignItems: "center",
    borderRadius: "7px",
    backgroundColor: "#122235",
    padding: "21px",
    "& p": {
      fontSize: "30px",
      fontWeight: "500",
      color: "#E0E3E7",
      "& span": {
        color: "#4166F4",
        marginRight: "8px",
      },
    },
  },
  mBox: {
    borderRadius: "31px",
    padding: "2px 21px",
    backgroundColor: "#031225",
  },
  lockedBox: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Barlow",
    "& p": {
      fontSize: "23px",
      color: "#FFFFFF58",
    },
    "& h3": {
      fontSize: "23px",
      color: "#E0E3E7",
    },
  },
  prizeBox: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      fontSize: "23px",
      color: "#FFFFFF58",
    },
    "& h3": {
      fontSize: "23px",
      color: "#E0E3E7",
    },
  },
  payoutBox: {
    marginTop: "20px",
    gap: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  payoutHigherButton: {
    backgroundColor: "#4166F4 !important",
    borderRadius: "12px !important",
    padding: "18px !important",
    width: "198px",
    display: "flex",
    flexDirection: "column",
    "& p": {
      color: "white",
      fontSize: "23px",
    },
    "& h3": {
      color: "white",
      opacity: "50%",
      fontSize: "23px",
    },
    "&.MuiButton-root.Mui-disabled": {
      opacity: "0.2 !important",
      cursor: "not-allowed",
      pointerEvents: "visible",
    },
  },
  approvalButton: {
    backgroundColor: "#4166F4 !important",
    borderRadius: "12px !important",
    padding: "18px !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& p": {
      color: "white",
      fontSize: "23px",
    },
    "& h3": {
      color: "white",
      opacity: "50%",
      fontSize: "23px",
    },
    "&.MuiButton-root.Mui-disabled": {
      opacity: "0.2 !important",
      cursor: "not-allowed",
      pointerEvents: "visible",
    },
  },
  noCursor: {
    cursor: "not-allowed !important",
  },
  payoutLowerButton: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "12px !important",
    padding: "18px !important",
    width: "198px",
    display: "flex",
    flexDirection: "column",
    "& p": {
      color: "#031225",
      fontSize: "23px",
    },
    "& h3": {
      color: "#031225",
      opacity: "50%",
      fontSize: "23px",
    },
    "&.MuiButton-root.Mui-disabled": {
      opacity: "0.2 !important",
      cursor: "not-allowed",
      pointerEvents: "visible",
    },
    coinGeckoBlurb: {
      color: "#808080",
    },
  },
  buttonBetSide: {
    cursor: "not-allowed !important",
    pointerEvents: "none !important",
  },
  maxBetBalance: {
    fontSize: "16px !important",
  },
  roundInfo: {
    color: "white",
  },
  betInput: {
    marginBottom: 5,
    background: "#031225",
  },
  betPlaced: {
    color: "white !important",
  },
  tokenDescriptionHeader: {
    "&.MuiTypography-root": {
      fontSize: "23px",
      fontWeight: "700",
      color: "white",
    },
  },
  tokenDescription: {
    fontWeight: "700",
    color: "white",
  },
  tooltip: {
    "&.MuiTooltip-tooltip": {
      backgroundColor: "white",
      color: "black",
    },
  },
  tooltipArrow: {
    "&.MuiTooltip-arrow": {
      color: "white",
    },
  },
});

export default hiloCardStyles;
