    import { useParams } from "react-router-dom";
    import Menu from "./Menu";
    import React, { useState, useEffect } from "react";
    import { useUpdateTodoMutation, useGetTodoByIdQuery } from "../core/data/redux/features/todo/updateTodo";

    const UpdateTodo = () => {
    const { id } = useParams();
    const { data: todoData, isLoading } = useGetTodoByIdQuery(id);
    const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();

    const [formData, setFormData] = useState({
        name: "cx",
        description: "cx",
        status: "0",
        image: null,
    });

    // ✅ Set formData when todoData arrives
    useEffect(() => {
        if (todoData && todoData.todos) {
        setFormData({
            name: todoData.todos.name || "",
            description: todoData.todos.description || "",
            status: todoData.todos.status || "0",
            image: null,
        });
        }
    }, [todoData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
        setFormData((prev) => ({ ...prev, image: files[0] }));
        } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        console.log("Form Data:", formData);
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("status", formData.status);
        if (formData.image) {
        data.append("image", formData.image);
        }

        try {
        await updateTodo({ id, todo: data });
        // alert("Todo updated successfully!");
        } catch (error) {
        console.error("Update failed:", error);
        alert("Update failed!");
        }
    };

    if (isLoading) return <p>Loading todo data...</p>;
    if (isUpdating) return <p>Updating todo...</p>;

    return (
        <div>
        <Menu />
        <p>Update Todo Data</p>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Enter Title"
            /><br />

            <input
            type="text"
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Enter Description"
            /><br />

            <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            >
            <option value="0">Pending</option>
            <option value="1">Completed</option>
            </select><br />

            {/* <input
            type="file"
            name="image"
            onChange={handleChange}
            /><br /> */}

            <button type="submit">Update Todo</button>
        </form>
        </div>
    );
    };

export default UpdateTodo;
