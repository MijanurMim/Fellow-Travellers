import SearchIcon from "@mui/icons-material/Search";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Packages from "../../Packages/Packages/Packages";
import Banner from "../Banner/Banner";
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
      <Banner />
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
      <div>
        {packages?.map((pd) => (
          <div key={pd._id}>
            <img src={pd.img} alt="" />
            <Typography variant="h4">
              {pd.title}
              {pd.date}
              {pd.packageType}
            </Typography>
          </div>
        ))}
      </div>
      <Packages></Packages>

      <WhyUs />
    </div>
  );
};

export default Home;
