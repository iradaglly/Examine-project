import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#343a40", position: "fixed", zIndex: 9999 }}
      >
        <Container>
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Button color="inherit">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/add"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Platform
                </Link>
              </Button>
              <Button color="inherit">Domain</Button>
              <Button color="inherit">Hosting</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">Contact</Button>
            </div>
            <div>
              <Button
                variant="outlined"
                color="success"
                style={{ color: "white" }}
              >
                Register
              </Button>
              <Button
                variant="contained"
                style={{ marginLeft: "10px", backgroundColor: "#7cbd1e" }}
              >
                Login
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
