import Menu from "./Menu";
import {useAddTodoMutation} from "../core/data/redux/features/todo/addtodo";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React, { useState } from "react";
const AddTodoForm = () => {

  const [addTodo, { isLoading, isSuccess, isError }] = useAddTodoMutation();
  const navigate = useNavigate();

 const [previewImage, setPreviewImage] = useState("");
//   if (isSuccess) return <div>Todo added successfully!</div>;

const chnageFileHundeler = (e) => {
    const file = e.target.files[0];
    setPreviewImage(URL.createObjectURL(file));
}


  const hundelsubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData(e.target);
    // if (submitData.get('image').name === '') {

    // }



    try {
      await addTodo(submitData).unwrap();
      e.target.reset(); // optional: reset form
    } catch (error) {
      console.error('Add todo failed:', error);
    }
  };

  // Redirect after success
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate('/todo/list');
      }, 2000); 
      return () => clearTimeout(timer);
    }

  }, [isSuccess, navigate]);


  
    return (
        <div>

            <Menu />
            <h1>Add Todo</h1>
            <form onSubmit={hundelsubmit}>

                {isLoading && <p>Loading...</p>}
                    {isError && <p>Error loading data.</p>}
                    {isSuccess && <p>Todo added successfully! Redirecting...</p>}
                <input type="text" name="name" placeholder="Enter Title" /> <br />
                <input type="text" name="description" placeholder="Enter description" /><br />
                <input type="text" name="status" placeholder="Enter long Description" /><br />
                <img width={200} src={previewImage} alt="image" /> <br />
                <input  name="image" onChange={chnageFileHundeler} type="file"  /><br />
                <button type="submit" >Add Todo</button>


            </form>
        </div>
    );
}

export default AddTodoForm;