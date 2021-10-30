import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const AddPackages = () => {
  const { user } = useFirebase();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("http://localhost:5000/addEvent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <h1>Add New Packages</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} placeholder="Title" />

        <input {...register("date", { required: true })} type="date" />
        <input
          {...register("description", { required: true })}
          type="textarea"
          placeholder="Description"
        />
        <input
          {...register("image", { required: true })}
          placeholder="Image Link (Ex: Freepik) "
        />
        <select {...register("packageType", { required: true })} type="date">
          <option value="single">Single</option>
          <option value="couple">Couple</option>
          <option value="family">Family</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddPackages;
