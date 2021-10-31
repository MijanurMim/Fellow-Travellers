import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const AddMember = () => {
  const { user } = useFirebase();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.status = user?.email;

    fetch("http://localhost:5000/addMember", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <Container sx={{ mt: "100px" }} className="packageDetailForm">
      <Typography variant="h3" color="primary">
        Add New Member
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {user?.displayName && (
          <input
            {...register("name", { required: true })}
            defaultValue={user?.displayName}
            className="inputField"
          />
        )}
        {user?.email && (
          <input
            {...register("email", { required: true })}
            type="email"
            defaultValue={user?.email}
            className="inputField"
          />
        )}

        {new Date() && (
          <input
            {...register("date", { required: true })}
            defaultValue={new Date()}
            className="inputField"
          />
        )}
        {
          <input
            {...register("description", { required: true })}
            placeholder="Short Description"
            className="inputField"
          />
        }
        <input
          {...register("image", { required: true })}
          placeholder="Image Link (Ex: Freepik) "
          className="inputField"
        />

        <Button type="submit" variant="contained" className="button">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddMember;
