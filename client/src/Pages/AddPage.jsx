import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { Container } from "@mui/system";
import { TextField } from "@mui/material";
import { PostPlatform } from "../api/requests";
import { useFormik } from "formik";
import { Validation } from "../Validation/Schema";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddPage = () => {
  const navigate = useNavigate();
  const [platforms, setPlatforms] = useState([]);
  const handleSubmit = async (values, actions) => {
    await PostPlatform(values);
    setPlatforms([...platforms, values]);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    actions.resetForm();
    navigate("/");
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      price: "",
    },
    validationSchema: Validation,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>

      <Container style={{ padding: "150px 0" }}>
        <form
          style={{ display: "flex", justifyContent: "center" }}
          onSubmit={formik.handleSubmit}
        >
          <div>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.image}
              onBlur={formik.handleBlur}
              id="standard-basic"
              label="Enter Image URL"
              variant="standard"
              name="image"
              style={{ display: "block", marginBottom: "50px" }}
            />
            {formik.errors.image && (
              <span style={{ color: "red" }}>{formik.errors.image}</span>
            )}
            <TextField
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              id="standard-basic"
              label="Enter title"
              variant="standard"
              name="title"
              style={{ display: "block", marginBottom: "50px" }}
            />
            {formik.errors.title && (
              <span style={{ color: "red" }}>{formik.errors.title}</span>
            )}
            <TextField
              onChange={formik.handleChange}
              value={formik.values.price}
              onBlur={formik.handleBlur}
              id="standard-basic"
              label="Enter price"
              variant="standard"
              name="price"
              style={{ display: "block", marginBottom: "50px" }}
            />
            {formik.errors.price && (
              <span style={{ color: "red" }}>{formik.errors.price}</span>
            )}{" "}
            <Button variant="contained" color="success" type="submit">
              Add
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddPage;
