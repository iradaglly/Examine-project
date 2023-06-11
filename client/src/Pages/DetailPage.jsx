import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetByID } from "../api/requests";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const DetailPage = () => {
  const { id } = useParams();
  const [platforms, setPlatforms] = useState({});
  useEffect(() => {
    GetByID(id).then((res) => {
      setPlatforms(res);
    });
  }, [id]);
  return (
    <Container style={{ padding: "150px 0"}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs={12} md={6} lg={4} key={platforms._id}>
            <Card sx={{ maxWidth: 345 }} style={{ padding: "40px 0" }}>
              <CardActionArea>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    component="img"
                    height="180"
                    image={platforms.image}
                    alt="hosting platform"
                  />
                </div>

                <CardContent style={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {platforms.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ fontSize: "18px", color: "#adb5c1" }}
                  >
                    Plans start at ${platforms.price}/month
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DetailPage;
