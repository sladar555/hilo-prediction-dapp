import { Typography, Box, Grid, Button } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Dashboard = () => {
  return (
    <Box
      position="relative"
      marginTop={{ xs: "50px", sm: "100px" }}
      marginBottom="50px"
      maxWidth={{ xs: "90%", lg: "1320px" }}
      marginLeft="auto"
      marginRight="auto"
    >
      <Typography color="white" fontSize={"24px"} fontWeight={"500"}>
        Dashboard
      </Typography>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        gap={{ xs: 0, sm: 4 }}
      >
        <Grid item width={{ xs: "100%", md: "48%" }}>
          <Box
            padding={{ xs: "20px", sm: "43px" }}
            borderRadius={{ xs: "51px", md: "40px" }}
            backgroundColor="#0C1C2E"
            marginTop={{ xs: "30px" }}
            border="0.5px solid #343435"
          >
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={7} md={6}>
                <Box>
                  <Typography
                    color="#818892"
                    fontSize={{ xs: "13px", sm: "18px" }}
                    fontWeight="500"
                  >
                    Net Payout ($HILO)
                  </Typography>
                  <Typography
                    color="white"
                    fontSize={{ xs: "17px", sm: "35px" }}
                    fontWeight="500"
                  >
                    117,665.3
                    <Typography
                      component="span"
                      fontSize={{ xs: "10px", sm: "22px" }}
                      fontWeight="500"
                      marginLeft="10px"
                      color="#4166F4"
                    >
                      ~$5,456.34
                    </Typography>
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent={{ lg: "space-between" }}
                  marginTop={{ xs: "20px", sm: "40px" }}
                >
                  <Box>
                    <Typography
                      color="#818892"
                      fontSize={{ xs: "13px", sm: "18px" }}
                      fontWeight="500"
                    >
                      Winning Rate
                    </Typography>
                    <Typography
                      color="white"
                      fontSize={{ xs: "17px", sm: "26px" }}
                      fontWeight="500"
                    >
                      36.36%
                    </Typography>
                  </Box>
                  <Box marginLeft={{ xs: "12px", md: "0px" }}>
                    <Typography
                      color="#818892"
                      fontSize={{ xs: "13px", sm: "18px" }}
                      fontWeight="500"
                    >
                      Winning Round
                    </Typography>
                    <Typography
                      color="white"
                      fontSize={{ xs: "17px", sm: "26px" }}
                      fontWeight="500"
                    >
                      4/11
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4} md={4}>
                <CircularProgressbar
                  value={86}
                  strokeWidth={14}
                  styles={buildStyles({
                    pathColor: `#4166F4`,
                    strokeLinecap: "butt",
                    pathTransitionDuration: 0.5,
                  })}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item width={{ xs: "100%", md: "48%" }}>
          <Box
            padding={{ xs: "20px", sm: "26px" }}
            borderRadius={{ xs: "51px", md: "40px" }}
            marginTop={{ xs: "30px" }}
            border="0.5px solid white"
          >
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography
                  color="#818892"
                  fontSize={{ xs: "13px", sm: "18px" }}
                  fontWeight="500"
                >
                  Total Winning Rounds
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ xs: "17px", sm: "26px" }}
                  fontWeight="500"
                >
                  4 Rounds
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="#818892"
                  fontSize={{ xs: "13px", sm: "18px" }}
                  fontWeight="500"
                  textAlign="right"
                >
                  ~$19.0436
                </Typography>
                <Typography
                  textAlign="right"
                  color="#4166F4"
                  fontSize={{ xs: "17px", sm: "26px" }}
                  fontWeight="500"
                >
                  +299.7437967 $HILO
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop="15px">
              <Box>
                <Typography
                  color="#818892"
                  fontSize={{ xs: "13px", sm: "18px" }}
                  fontWeight="500"
                >
                  Total Losing Rounds
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ xs: "17px", sm: "26px" }}
                  fontWeight="500"
                >
                  7 Rounds
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="#818892"
                  fontSize={{ xs: "13px", sm: "18px" }}
                  fontWeight="500"
                  textAlign="right"
                >
                  ~$14.6126
                </Typography>
                <Typography
                  textAlign="right"
                  color="white"
                  fontSize={{ xs: "17px", sm: "26px" }}
                  fontWeight="500"
                >
                  -230 $HILO
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop="15px">
              <Box>
                <Typography
                  color="#818892"
                  fontSize={{ xs: "13px", sm: "18px" }}
                  fontWeight="500"
                >
                  Total Positions
                </Typography>
                <Typography
                  color="white"
                  fontSize={{ xs: "17px", sm: "26px" }}
                  fontWeight="500"
                >
                  11 Rounds
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="#818892"
                  fontSize={{ xs: "13px", sm: "18px" }}
                  fontWeight="500"
                  textAlign="right"
                >
                  ~34.66
                </Typography>
                <Typography
                  textAlign="right"
                  color="white"
                  fontSize={{ xs: "17px", sm: "26px" }}
                  fontWeight="500"
                >
                  545.519786 $HILO
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Box
          width={{ xs: "100%", md: "50%" }}
          marginLeft={{ xs: "auto" }}
          marginRight={{ xs: "auto" }}
          padding={{ xs: "20px", sm: "26px" }}
          borderRadius={{ xs: "51px", md: "40px" }}
          marginTop={{ xs: "30px", sm: "50px" }}
          border="0.5px solid white"
        >
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography
                color="#818892"
                fontSize={{ xs: "13px", sm: "18px" }}
                fontWeight="500"
              >
                Best Round
              </Typography>
              <Typography
                color="white"
                fontSize={{ xs: "17px", sm: "26px" }}
                fontWeight="500"
              >
                #86
              </Typography>
            </Box>
            <Box>
              <Typography
                color="#818892"
                fontSize={{ xs: "13px", sm: "18px" }}
                fontWeight="500"
                textAlign="right"
              >
                ~$7.0436
              </Typography>
              <Typography
                textAlign="right"
                color="#4166F4"
                fontSize={{ xs: "17px", sm: "26px" }}
                fontWeight="500"
              >
                +109.1421967 $HILO
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" marginTop="15px">
            <Box>
              <Typography
                color="#818892"
                fontSize={{ xs: "13px", sm: "18px" }}
                fontWeight="500"
              >
                Avg. Payout
              </Typography>
              <Typography
                color="white"
                fontSize={{ xs: "17px", sm: "26px" }}
                fontWeight="500"
              >
                6.34034515 $HILO
              </Typography>
              <Typography
                color="#818892"
                fontSize={{ xs: "13px", sm: "18px" }}
                fontWeight="500"
              >
                ~$0.4028
              </Typography>
            </Box>
            <Box>
              <Typography
                color="#818892"
                fontSize={{ xs: "13px", sm: "18px" }}
                fontWeight="500"
                textAlign="right"
              >
                Avg. Position
              </Typography>
              <Typography
                textAlign="right"
                color="white"
                fontSize={{ xs: "17px", sm: "26px" }}
                fontWeight="500"
              >
                49.59270782
              </Typography>
              <Typography
                color="#818892"
                fontSize={{ xs: "13px", sm: "18px" }}
                fontWeight="500"
                textAlign="right"
              >
                ~$3.1508
              </Typography>
            </Box>
          </Box>
          <Button
            style={{
              backgroundColor: "#4166F4",
              width: "100%",
              color: "white",
              borderRadius: "100px",
              fontSize: "18px",
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            Positions History
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
export default Dashboard;
