import { TextField } from "@mui/material";
import React from "react";

const Search = ({ storage, setPlatforms }) => {
  const handleSearch = (e) => {
    const filteredPlatforms = storage.current.filter((x) =>
      x.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())
    );
    setPlatforms(filteredPlatforms);
  };
  return (
    <TextField
      id="outlined-basic"
      label="Search Platform"
      variant="outlined"
      onChange={handleSearch}
    />
  );
};

export default Search;
