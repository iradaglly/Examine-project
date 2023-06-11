import React from "react";
import Button from "@mui/material/Button";
const Sort = ({ platforms, setPlatforms }) => {
  const handleSort = () => {
    const sorted = [...platforms];
    sorted.sort((a, b) => a.price - b.price);
setPlatforms(sorted)
  };
  return (
    <Button
      variant="outlined"
      size="small"
      onClick={handleSort}
      style={{ display: "inline-block", margin: "0 auto" }}
    >
      Sort
    </Button>
  );
};

export default Sort;
