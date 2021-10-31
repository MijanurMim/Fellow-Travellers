import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const AddPackages = () => {
  const { user } = useFirebase();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "Pending";
    fetch("https://wicked-spider-07465.herokuapp.com/addEvent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <Container sx={{ mt: "165px" }} className="packageDetailForm">
      <Typography variant="h3" color="primary">
        Add New Package
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true })}
          placeholder="Title"
          className="inputField"
        />

        <input
          {...register("date", { required: true })}
          type="date"
          className="inputField"
        />
        <input
          {...register("number", { required: true })}
          type="number"
          placeholder="Cost"
          className="inputField"
        />
        <input
          {...register("description", { required: true })}
          type="textarea"
          placeholder="Description"
          className="inputField"
        />
        <input
          {...register("image", { required: true })}
          placeholder="Image Link (Ex: Freepik) "
          className="inputField"
        />
        <br />
        <select
          {...register("packageType", { required: true })}
          type="date"
          className="inputField"
        >
          <option value="single">Single</option>
          <option value="couple">Couple</option>
          <option value="family">Family</option>
        </select>
        <br />
        <Button type="submit" variant="contained" className="button">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddPackages;
