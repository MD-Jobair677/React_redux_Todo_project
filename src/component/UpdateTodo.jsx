import { useParams } from "react-router-dom";
import Menu from "./Menu";
import React, { useState, useEffect } from "react";
import { useUpdateTodoMutation, useGetTodoByIdQuery } from "../core/data/redux/features/todo/updateTodo";

const UpdateTodo = () => {
  const { id } = useParams();
  const { data: todoData, isLoading } = useGetTodoByIdQuery(id);

  console.log("todoData", todoData);
  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();
  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "",
    image: '',
  });




  useEffect(() => {
    if (todoData && todoData.todos) {
      setFormData({
        name: todoData.todos.name || "",
        description: todoData.todos.description || "",
        status: todoData.todos.status || "0",
        image: todoData.todos.image,
      });

      // Set preview image if available
      setPreviewImage(todoData.todos.image)
    }
  }, [todoData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };



  const handleFileChange = (e) => {
      const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

     setPreviewImage(URL.createObjectURL(file));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();

    // formData.append("id", id);
    if (formData.image) {
      submitData.append("image", formData.image);
    }

    submitData.append("name", formData.name);
    submitData.append("description", formData.description);
    submitData.append("status", formData.status);
    submitData.append("_method", "PUT");


    try {
      await updateTodo({ id, submitData }).unwrap();
      alert("Todo updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed!");
    }
  };



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!todoData) {
    return <div>No Todo Found</div>;
  }




  // if (isLoading) return <p>Loading todo data...</p>;
  // if (isUpdating) return <p>Updating todo...</p>;

  return (
    <div>
      <Menu />
      <p>Update Todo Data</p>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter Title"
          required
        />
        <br />

        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
          placeholder="Enter Description"
        />
        <br />

        <select onChange={handleChange} name="status" value={formData.status} >
          <option value="0">Pending</option>
          <option value="1">Completed</option>
        </select>
        <br />


        <img width={200} src={previewImage} alt="img" /> <br />

        <input type="file" name="image" onChange={handleFileChange} />
        <br />

        <button type="submit" disabled={isUpdating}>
          {isUpdating ? "Updating..." : "Update Todo"}
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;










