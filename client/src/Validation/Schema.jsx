import * as yup from "yup";

export const Validation = yup.object().shape({
  title: yup.string().required("title is required"),
  image: yup.string().required("image is required"),
  price: yup
    .number()
    .min(0, "price must be positive")
    .required("price is required"),
});
