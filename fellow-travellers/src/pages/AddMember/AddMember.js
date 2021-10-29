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
    <div>
      <h1>Add New Members</h1>
      <h1>Add New Packages</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder={user?.displayName}
        />
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder={user?.email}
        />

        <input
          {...register("date", { required: true })}
          defaultValue={new Date()}
        />

        <input
          {...register("description", { required: true })}
          placeholder="Short Description"
        />
        <input
          {...register("image", { required: true })}
          placeholder="Image Link (Ex: Freepik) "
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMember;
