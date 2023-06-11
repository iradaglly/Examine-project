import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { DeletePlatform, GetAllPlatforms } from "../api/requests";
import Swal from "sweetalert2";
import Sort from "./Sort";
import Search from "./Search";
import { useRef } from "react";

const HostingCards = () => {
  const [platforms, setPlatforms] = useState([]);
  const storage = useRef([]);
  useEffect(() => {
    GetAllPlatforms().then((res) => {
      setPlatforms(res);
      storage.current = res;
    });
  }, []);
  return (
    <div style={{ padding: "80px 0" }}>
      <Container>
        <h1
          style={{ textAlign: "center", fontWeight: "400", color: "#4d4d4d" }}
        >
          Different hosting platforms to suit <br /> every need!
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Sort platforms={platforms} setPlatforms={setPlatforms} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Search storage={storage} setPlatforms={setPlatforms} />
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {platforms &&
              platforms.map((elem) => (
                <Grid item xs={12} md={6} lg={4} key={elem._id}>
                  <Card sx={{ maxWidth: 345 }} style={{ padding: "40px 0" }}>
                    <CardActionArea>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia
                          style={{
                            width: "100px",
                            height: "100px",
                          }}
                          component="img"
                          height="180"
                          image={elem.image}
                          alt="hosting platform"
                        />
                      </div>

                      <CardContent style={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {elem.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ fontSize: "18px", color: "#adb5c1" }}
                        >
                          Plans start at ${elem.price}/month
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#7cbd1e",
                          display: "inline-block",
                          margin: "0 auto",
                        }}
                      >
                        <Link
                          to={`/platforms/${elem._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          View Details
                        </Link>
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              DeletePlatform(elem._id).then((res) => {
                                Swal.fire(
                                  `${elem.title} DELETED`,
                                  "Your file has been deleted.",
                                  "success"
                                );
                              });
                              setPlatforms(
                                platforms.filter((x) => x._id !== elem._id)
                              );
                            }
                          });
                        }}
                        style={{
                          display: "inline-block",
                          margin: "0 auto",
                        }}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HostingCards;
