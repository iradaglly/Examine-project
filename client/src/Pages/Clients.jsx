import { Container } from "@mui/system";
import React from "react";
import style from "./home.module.css";
import Button from "@mui/material/Button";


const Clients = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "200px 0",
        display: "flex",
        alignItems: "center",
      }}
      className={style.clientImg}
    >
      <Container>
        <div>
          <h1
            style={{
              color: "white",
              textAlign: "start",
              fontWeight: "400",
              fontSize: "70px",
              margin:"0"
            }}
          >
            Satisfied Clients
          </h1>
          <span style={{ color: "white", fontSize: "25px"}}>
            We are rated 4.99 / 5.00 (based on 4443 Reviews)
          </span>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#7cbd1e",
              width: "170px",
              height: "60px",
              fontWeight:"bold",
              display:"block",
              marginTop:"3%"

            }}
          >
            Register Now
          </Button>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Clients;
