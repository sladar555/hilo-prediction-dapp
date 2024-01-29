const statsPageStyles = (theme) => ({
  mainContainer: {
    position: "relative",
    marginTop: "170px",
    width: "995px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  dropdown: {
    backgroundColor: "#35414E",
    minWidth: "70px",
    fontSize: "19.36px!important",
    fontWeight: "500!important",
    borderRadius: " 24.5px",
    color: "white!important",
    "& .MuiSelect-select": {
      color: "white",
      fontSize: "16px",
      border: "none",
      padding: "5px 30px 5px 14px!important",
    },
    "& svg": {
      color: "white",
      right: "5px!important",
    },
  },
});

export default statsPageStyles;
