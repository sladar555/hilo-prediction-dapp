import React, { useEffect, useState } from 'react';
import { Search } from "@mui/icons-material";
import {
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Web3 from "web3";

import TropyOne from "../../assets/img/trophy-1.svg";
import TropyTwo from "../../assets/img/trophy-2.svg";
import TropyThree from "../../assets/img/trophy-3.svg";
import styles from "assets/jss/tableStyles";
import ABILPToken from '../../ABI.js';

const provider = process.env.REACT_APP_Web3ProviderURL;
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);
const LPContract = new web3.eth.Contract(ABILPToken, process.env.REACT_APP_AddrLPToken);

const LeaderBoard = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  
  const [playersInfo, setPlayersInfo] = useState([]);
  const [hiloPrice, setHiloPrice] = useState(0);

  useEffect(async () => {
    Axios.get(process.env.REACT_APP_EndpointPlayersInfo)
      .then(response => {
        console.log(response.data);
        setPlayersInfo(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      
      const res = await LPContract.methods.getReserves().call();
      const HiloAmount = web3.utils.fromWei(res[1], "ether");
      const USDTAmount = web3.utils.fromWei(res[0], "mwei");
      console.log(HiloAmount);
      console.log(USDTAmount);
      setHiloPrice(USDTAmount / HiloAmount);
  }, []);
  
  const convertNumberToLocaleString = (num) => {
    if (!num) return;
    return num.toLocaleString('en-US');
  }

  const convertAddress = (addr) => {
    if (!addr) return;
    return addr.slice(0, 7) + '...' + addr.slice(-4);
  }

  const convertWinningRate = (winningNum, involvedNum) => {
    return (winningNum * 100 / involvedNum).toFixed(2) + '%';
  }

  const convertUSDTPrice = (amt, price) => {
    if (!amt) return;
    return '~' + (web3.utils.fromWei(amt, "ether") * price).toLocaleString('es-US', {style:"currency", currency:"USD"});
  }

  const ComponentTableRow = ({data, index, price}) => {
    return ( 
        <TableRow className={classes.tRows}>
          <TableCell align="left" className={classes.tCell}>
            { index }
          </TableCell>
          <TableCell align="left" className={classes.tCell}>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              underline="none"
              className={classes.tLink}
            >
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="#4166F4"
              >
                { convertAddress(data?.address) }
              </Typography>
            </Link>
          </TableCell>
          <TableCell align="center" className={classes.tCell}>
            { convertNumberToLocaleString(data?.netPayoutToken) + '(' + convertUSDTPrice(data?.netPayout, price) + ')' } 
          </TableCell>
          <TableCell align="center" className={classes.tCell}>
            { convertWinningRate(data?.winningRounds, data?.roundsInvolved) }
          </TableCell>
          <TableCell align="center" className={classes.tCell}>
            { data?.winningRounds }
          </TableCell>
          <TableCell align="center" className={classes.tCell}>
            { data?.roundsInvolved }
          </TableCell>
        </TableRow>
    )
  }
  
  return (
    <Box
      position="relative"
      marginTop={{ xs: "50px", sm: "100px" }}
      marginBottom="50px"
      maxWidth={{ xs: "90%", lg: "1320px" }}
      marginLeft="auto"
      marginRight="auto"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Typography
          color={{ xs: "rgba(255, 255, 255, 0.5)", sm: "white" }}
          fontSize={"24px"}
          fontWeight={"500"}
          marginBottom={{ xs: "24px", sm: "0px" }}
        >
          LeaderBoards
        </Typography>
        <Box
          border="1px solid rgba(255, 255, 255, 0.3)"
          borderRadius="100px"
          color="white"
          width={{ xs: "100%", sm: "230px" }}
          position="relative"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          height="39px"
        >
          <Search
            style={{
              marginRight: "10px",
            }}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: "transparent",
              outline: "none",
              position: "absolute",
              inset: 0,
              borderRadius: "100px",
              color: "white",
              fontSize: "16px",
              padding: "13px 17px",
              border: "none",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        gap={{ xs: 0, sm: 4, xl: 0 }}
      >
        <Grid item width={{ xs: "100%", md: "31%" }}>
          <Box
            padding={{ xs: "32px", sm: "43px" }}
            borderRadius="40px"
            backgroundColor="#0C1C2E"
            marginTop={{ xs: "30px" }}
            border="0.5px solid #343435"
          >
            <Grid
              borderBottom="1px solid rgba(255, 255, 255, 0.25)"
              container
              display="flex"
              justifyContent="space-between"
              paddingBottom="30px"
            >
              <Grid item xs={7} md={9}>
                <Box>
                  <Typography
                    color="#818892"
                    fontSize={{ xs: "17px", sm: "24px" }}
                    fontWeight="500"
                  >
                    Net Payout ($HILO)
                  </Typography>
                  <Typography
                    color="white"
                    fontSize={{ xs: "24px", sm: "32px" }}
                    fontWeight="500"
                  >
                    {
                      (playersInfo.length !=  0) ? convertNumberToLocaleString(playersInfo[0].netPayoutToken) : ""
                    }
                  </Typography>
                  <Typography
                    component="span"
                    fontSize={{ xs: "11px", sm: "15px" }}
                    fontWeight="500"
                    color="#4166F4"
                  >
                    {
                      (playersInfo.length !=  0) ? convertUSDTPrice(playersInfo[0].netPayout, hiloPrice) : ""
                    }                    
                  </Typography>
                </Box>
              </Grid>
              <Grid display={{ xs: "none", md: "block" }} item xs={4} md={3}>
                <img src={TropyOne} />
              </Grid>
              <Grid display={{ md: "none" }} item xs={4} md={3}>
                <img src={TropyOne} style={{ width: "80%" }} />
              </Grid>
            </Grid>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="22px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Address
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="#4166F4"
              >
                {
                  (playersInfo.length !=  0) ? convertAddress(playersInfo[0].address) : ""
                }
              </Typography>
            </Box>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="8px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Winning Rate
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="white"
              >
                {
                  (playersInfo.length !=  0) ? convertWinningRate(playersInfo[0].winningRounds, playersInfo[0].roundsInvolved) : ""
                }
              </Typography>
            </Box>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="8px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Winning Rounds
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="white"
              >
                {
                  (playersInfo.length !=  0) ? playersInfo[0].winningRounds + '/' + playersInfo[0].roundsInvolved : ""
                }
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item width={{ xs: "100%", md: "31%" }}>
          <Box
            padding={{ xs: "32px", sm: "43px" }}
            borderRadius="40px"
            backgroundColor="#0C1C2E"
            marginTop={{ xs: "30px" }}
            border="0.5px solid #343435"
          >
            <Grid
              borderBottom="1px solid rgba(255, 255, 255, 0.25)"
              container
              display="flex"
              justifyContent="space-between"
              paddingBottom="30px"
            >
              <Grid item xs={7} md={9}>
                <Box>
                  <Typography
                    color="#818892"
                    fontSize={{ xs: "17px", sm: "24px" }}
                    fontWeight="500"
                  >
                    Net Payout ($HILO)
                  </Typography>
                  <Typography
                    color="white"
                    fontSize={{ xs: "24px", sm: "32px" }}
                    fontWeight="500"
                  >
                    {
                      (playersInfo.length !=  0) ? convertNumberToLocaleString(playersInfo[1].netPayoutToken) : ""
                    }
                  </Typography>
                  <Typography
                    component="span"
                    fontSize={{ xs: "11px", sm: "15px" }}
                    fontWeight="500"
                    color="#4166F4"
                  >
                    {
                      (playersInfo.length !=  0) ? convertUSDTPrice(playersInfo[1].netPayout, hiloPrice) : ""
                    } 
                  </Typography>
                </Box>
              </Grid>
              <Grid display={{ xs: "none", md: "block" }} item xs={4} md={3}>
                <img src={TropyTwo} />
              </Grid>
              <Grid display={{ md: "none" }} item xs={4} md={3}>
                <img src={TropyTwo} style={{ width: "80%" }} />
              </Grid>
            </Grid>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="22px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Address
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="#4166F4"
              >
                {
                  (playersInfo.length !=  0) ? convertAddress(playersInfo[1].address) : ""
                }
              </Typography>
            </Box>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="8px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Winning Rate
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="white"
              >
                {
                  (playersInfo.length !=  0) ? convertWinningRate(playersInfo[1].winningRounds, playersInfo[1].roundsInvolved) : ""
                }
              </Typography>
            </Box>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="8px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Winning Rounds
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="white"
              >
                {
                  (playersInfo.length !=  0) ? playersInfo[1].winningRounds + '/' + playersInfo[1].roundsInvolved : ""
                }
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item width={{ xs: "100%", md: "31%" }}>
          <Box
            padding={{ xs: "32px", sm: "43px" }}
            borderRadius="40px"
            backgroundColor="#0C1C2E"
            marginTop={{ xs: "30px" }}
            border="0.5px solid #343435"
          >
            <Grid
              borderBottom="1px solid rgba(255, 255, 255, 0.25)"
              container
              display="flex"
              justifyContent="space-between"
              paddingBottom="30px"
            >
              <Grid item xs={7} md={9}>
                <Box>
                  <Typography
                    color="#818892"
                    fontSize={{ xs: "17px", sm: "24px" }}
                    fontWeight="500"
                  >
                    Net Payout ($HILO)
                  </Typography>
                  <Typography
                    color="white"
                    fontSize={{ xs: "24px", sm: "32px" }}
                    fontWeight="500"
                  >
                    {
                      (playersInfo.length !=  0) ? convertNumberToLocaleString(playersInfo[2].netPayoutToken) : ""
                    }

                  </Typography>
                  <Typography
                    component="span"
                    fontSize={{ xs: "11px", sm: "15px" }}
                    fontWeight="500"
                    color="#4166F4"
                  >
                    {
                      (playersInfo.length !=  0) ? convertUSDTPrice(playersInfo[2].netPayout, hiloPrice) : ""
                    } 
                  </Typography>
                </Box>
              </Grid>
              <Grid display={{ xs: "none", md: "block" }} item xs={4} md={3}>
                <img src={TropyThree} />
              </Grid>
              <Grid display={{ md: "none" }} item xs={4} md={3}>
                <img src={TropyThree} style={{ width: "80%" }} />
              </Grid>
            </Grid>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="22px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Address
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="#4166F4"
              >
                {
                  (playersInfo.length !=  0) ? convertAddress(playersInfo[2].address) : ""
                }           
              </Typography>
            </Box>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="8px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Winning Rate
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="white"
              >
                {
                  (playersInfo.length !=  0) ? convertWinningRate(playersInfo[2].winningRounds, playersInfo[2].roundsInvolved) : ""
                }
              </Typography>
            </Box>
            <Box
              container
              display="flex"
              justifyContent="space-between"
              paddingTop="8px"
            >
              <Typography
                color="#818892"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
              >
                Winning Rounds
              </Typography>
              <Typography
                component="span"
                fontSize={{ xs: "11px", sm: "15px" }}
                fontWeight="500"
                color="white"
              >
                {
                  (playersInfo.length !=  0) ? playersInfo[2].winningRounds + '/' + playersInfo[2].roundsInvolved : ""
                }
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop="42px">
        <TableContainer className={classes.block} component={Paper}>
          <Table
            className={classes.body}
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead className={clsx(classes.trow, classes.header)}>
              <TableRow>
                <TableCell align="left" className={classes.tCell}>
                  Rank
                </TableCell>
                <TableCell align="left" className={classes.tCell}>
                  WALLET ADDRESS
                </TableCell>
                <TableCell align="center" className={classes.tCell}>
                  NET PAYOUT ($HILO)
                </TableCell>

                <TableCell align="center" className={classes.tCell}>
                  WINNING RATE
                </TableCell>
                <TableCell align="center" className={classes.tCell}>
                  WINNING ROUND
                </TableCell>
                <TableCell align="center" className={classes.tCell}>
                  ROUNDS INVOLVED
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {
                (playersInfo.length != 0) ?
                  playersInfo.map((item, index) =>
                  {
                    if (index >= 3 ) {
                      return <ComponentTableRow data = { item } index = { index + 1 } price = { hiloPrice } />
                    } else {
                      return ''
                    }                    
                  }
                  ) : ''
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default LeaderBoard;
