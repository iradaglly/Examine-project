import React from "react";
import Button from "@mui/material/Button";
import style from "./home.module.css"
const HeroSection = () => {
  return (
    <div
      style={{
        width: "100%",
      padding:"250px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "35px",
      }}
      className={style.heroImg}
    >
      <div>
        <h1 style={{color:"white"}}>24/7 Customer Support</h1>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#7cbd1e",
              width: "170px",
              height: "60px",
              fontWeight:"bold"

            }}
          >
            Download
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            style={{
              color: "white",
              marginLeft: "10px",
              width: "170px",
              height: "60px",
              fontWeight:"bold"
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
