import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "150px 0",
        backgroundColor: "#343a40",
        bottom: 0,
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ color: "#888b84", fontSize: "18px" }}>
        Copyright © 2023 All Rights Reserved | This template is made with{" "}
        <FavoriteIcon style={{ color: "red" }} />
        by Colorlib
      </span>
    </div>
  );
};

export default Footer;
