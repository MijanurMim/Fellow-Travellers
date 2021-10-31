import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Packages from "../../Packages/Packages/Packages";
import Banner from "../Banner/Banner";
import Memories from "../Memories/Memories";
import SearchResult from "../SearchResult/SearchResult";
import WhyUs from "../WhyUs/WhyUs";
import "./Home.css";

const Home = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    // sending data using query
    fetch(`http://localhost:5000/searchPackages?search=${search}`)
      .then((res) => res.json())
      .then((result) => setPackages(result));
  };

  return (
    <div>
      {/* Banner area  */}
      <Banner />
      {/* search area  */}
      <div>
        <input
          className="search"
          onChange={handleInput}
          type="text"
          placeholder="Search Your Desired Destination"
        />
        <Button onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </div>
      {/* search result */}
      <Grid item container xs={12} spacing={2}>
        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
        <Grid
          item
          container
          xs={false}
          md={10}
          justifyContent="space-evenly"
          sx={{ my: "40px" }}
        >
          {packages?.map((pd) => (
            <SearchResult key={pd._id} pd={pd}></SearchResult>
          ))}
        </Grid>

        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
      </Grid>
      {/* Home packages  */}
      <Packages></Packages>
      {/* Why US area  */}
      <WhyUs />
      {/* Memories area  */}
      <Memories></Memories>
    </div>
  );
};

export default Home;
