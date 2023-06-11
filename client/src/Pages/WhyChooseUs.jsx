import { Container } from "@mui/system";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PersonIcon from "@mui/icons-material/Person";

const WhyChooseUs = () => {
  return (
    <div style={{ padding: "80px 0" }}>
      <Container>
        <h1
          style={{ textAlign: "center", fontWeight: "400", color: "#4d4d4d" }}
        >
          Why Choose Us
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <Card sx={{ maxWidth: 350 }} style={{ padding: "20px" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <LinkIcon
                          style={{
                            border: "2px solid #7cbd1e",
                            padding: "7px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />{" "}
                        High Quality Hardware
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "17px", color: "#babdc8" }}
                      >
                        Lorem ipsum dolor sit amet consectetur is a nice
                        adipisicing elita ssumenda a similique perferendis
                        dolorem eos.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <Card sx={{ maxWidth: 350 }} style={{ padding: "20px" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <AutoAwesomeMotionIcon
                          style={{
                            border: "2px solid #7cbd1e",
                            padding: "7px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />{" "}
                        Top Data Centers
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "17px", color: "#babdc8" }}
                      >
                        Lorem ipsum dolor sit amet consectetur is a nice
                        adipisicing elita ssumenda a similique perferendis
                        dolorem eos.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ maxWidth: 350 }} style={{ padding: "20px" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <AirplanemodeActiveIcon
                          style={{
                            border: "2px solid #7cbd1e",
                            padding: "7px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />{" "}
                        Outstanding Speed
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "17px", color: "#babdc8" }}
                      >
                        Lorem ipsum dolor sit amet consectetur is a nice
                        adipisicing elita ssumenda a similique perferendis
                        dolorem eos.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ maxWidth: 350 }} style={{ padding: "20px" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <WhatshotIcon
                          style={{
                            border: "2px solid #7cbd1e",
                            padding: "7px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />{" "}
                        Amazing Uptime
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "17px", color: "#babdc8" }}
                      >
                        Lorem ipsum dolor sit amet consectetur is a nice
                        adipisicing elita ssumenda a similique perferendis
                        dolorem eos.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ maxWidth: 350 }} style={{ padding: "20px" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <HeadphonesIcon
                          style={{
                            border: "2px solid #7cbd1e",
                            padding: "7px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />{" "}
                        Best Support
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "17px", color: "#babdc8" }}
                      >
                        Lorem ipsum dolor sit amet consectetur is a nice
                        adipisicing elita ssumenda a similique perferendis
                        dolorem eos.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                {" "}
                <Card sx={{ maxWidth: 350 }} style={{ padding: "20px" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <PersonIcon
                          style={{
                            border: "2px solid #7cbd1e",
                            padding: "7px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        Client Reviews
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "17px", color: "#babdc8" }}
                      >
                        Lorem ipsum dolor sit amet consectetur is a nice
                        adipisicing elita ssumenda a similique perferendis
                        dolorem eos.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
