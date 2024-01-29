import { useState } from "react";
import { makeStyles } from "@mui/styles";
import styles from "assets/jss/statsPageStyles";
import { Typography, Box, Stack, MenuItem, Select, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { formatCurrency } from "utils/helpers";
import Data from "../../statsData.json";
import CountUp from "react-countup";
const Stats = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState("24hr");
  const [currentData, setCurrentData] = useState(Data["24hr"]);

  return (
    <Box
      position="relative"
      marginTop={{ xs: "50px", md: "130px" }}
      marginBottom="50px"
      width={{ xs: "90%", lg: "995px" }}
      marginLeft="auto"
      marginRight="auto"
    >
      <Typography color="white" fontSize={"24px"} fontWeight={"500"}>
        Analytics
      </Typography>
      <Box
        padding={{ xs: "20px", md: "43px" }}
        borderRadius="20px"
        backgroundColor="#0C1C2E"
        border="1px solid #848E9A"
        marginTop={{ xs: "30px" }}
      >
        <Stack direction="row" justifyContent="flex-end" alignItems="center">
          <Typography color="white" fontSize="20px">
            Timeframe:&nbsp;&nbsp;
          </Typography>
          <Select
            IconComponent={ExpandMoreIcon}
            disableUnderline={true}
            variant="standard"
            className={classes.dropdown}
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
              setCurrentData(Data[e.target.value]);
            }}
          >
            <MenuItem value={"24hr"}>24h</MenuItem>
            <MenuItem value={"6hr"}>6h</MenuItem>
          </Select>
        </Stack>
        <Grid container>
          <Grid item xs={8} marginTop={{ xs: "50px", md: "0px" }}>
            <Typography color="#818892" fontSize="24.58px" fontWeight="500">
              BETS VOLUME
            </Typography>
            <Typography
              fontWeight="500"
              fontSize={{ xs: "50px", md: "86px" }}
              color="white"
              lineHeight={{ md: "103px" }}
            >
              <CountUp
                end={currentData.volume.bets}
                duration={2}
                formattingFn={(val) => {
                  return formatCurrency(val);
                }}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            display="flex"
            alignItems="center"
            item
            xs={12}
            lg={6}
            marginTop="56px"
          >
            <Typography
              color="#818892"
              fontSize={{ xs: "16px", md: "24.58px" }}
              fontWeight="500"
              marginRight="2px"
            >
              BULLISH VOLUME
            </Typography>
            <ArrowUpwardIcon htmlColor="white" fontSize="large" />
            <Typography
              color="white"
              fontSize="40px"
              fontWeight="500"
              marginLeft="10px"
            >
              {currentData.volume.bullish}
            </Typography>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent={{ lg: "flex-end" }}
            item
            xs={12}
            lg={6}
            marginTop={{ md: "56px" }}
          >
            <Typography
              color="#818892"
              fontSize={{ xs: "16px", md: "24.58px" }}
              fontWeight="500"
              marginRight="2px"
            >
              BEARISH VOLUME
            </Typography>
            <ArrowDownwardIcon htmlColor="white" fontSize="large" />
            <Typography
              color="white"
              fontSize="40px"
              fontWeight="500"
              marginLeft="10px"
            >
              {currentData.volume.bearish}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container marginTop="37px" gap={{ xs: 0, md: 2 }}>
        <Grid
          item
          xs={6}
          sm={3}
          lg={2}
          marginBottom={{ xs: "20px", md: "0px" }}
        >
          <Typography
            color="#818892"
            fontSize={{ xs: "16px", md: "23px" }}
            fontWeight="500"
          >
            VISITORS
          </Typography>
          <Typography color="white" fontSize="40px" fontWeight="500">
            {currentData.visitors}
          </Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "flex-end", sm: "flex-start" }}
          item
          xs={6}
          sm={3}
          lg={2}
          marginBottom={{ xs: "20px", md: "0px" }}
        >
          <div>
            <Typography
              color="#818892"
              fontSize={{ xs: "16px", md: "23px" }}
              fontWeight="500"
            >
              VIEWS
            </Typography>
            <Typography color="white" fontSize="40px" fontWeight="500">
              {currentData.views}
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          lg={3}
          marginBottom={{ xs: "20px", md: "0px" }}
        >
          <Typography
            color="#818892"
            fontSize={{ xs: "16px", md: "23px" }}
            fontWeight="500"
          >
            WALLETS CONNECTED
          </Typography>
          <Typography color="white" fontSize="40px" fontWeight="500">
            {currentData.walletsConnected}
          </Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "flex-end", sm: "flex-start" }}
          item
          xs={6}
          sm={3}
          lg={2}
          marginBottom={{ xs: "20px", md: "0px" }}
        >
          <div>
            {" "}
            <Typography
              color="#818892"
              fontSize={{ xs: "16px", md: "23px" }}
              fontWeight="500"
            >
              PLAYERS
            </Typography>
            <Typography color="white" fontSize="40px" fontWeight="500">
              {currentData.players}
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          lg={2}
          marginBottom={{ xs: "20px", md: "0px" }}
        >
          <Typography
            color="#818892"
            fontSize={{ xs: "16px", md: "23px" }}
            fontWeight="500"
          >
            STAKED HILO
          </Typography>
          <Typography color="white" fontSize="40px" fontWeight="500">
            {currentData.stakedHillo}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Stats;
