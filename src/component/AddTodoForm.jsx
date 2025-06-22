import Menu from "./Menu";
import {useAddTodoMutation} from "../core/data/redux/features/todo/addtodo";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const AddTodoForm = () => {

  const [addTodo, { isLoading, isSuccess, isError }] = useAddTodoMutation();
  const navigate = useNavigate();


//   if (isSuccess) return <div>Todo added successfully!</div>;



  const hundelsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // FormData automatically handles file upload
    try {
      await addTodo(formData).unwrap();
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
                {/* <input name="file" type="file"  /><br /> */}
                <button type="submit" >Add Todo</button>


            </form>
        </div>
    );
}

export default AddTodoForm;