import Menu from "./Menu";
import { useGetTodoListQuery } from "../core/data/redux/features/todo/getTodoList";
import { Link } from 'react-router-dom';
import Search from "./Search";
import  { useState } from "react";


const TodoList = () => {
  const { data, isLoading, isError } = useGetTodoListQuery();
  const todos = Array.isArray(data?.todos) ? data.todos : [];
  const [searchTerm, setSearchTerm] = useState(""); //search system 
const filteredTodos = todos.filter(todo =>
  todo.name.toLowerCase().includes(searchTerm.toLowerCase())
);


  // console.log("data:", data);
  // console.log("todos:", todos);

  if (isLoading) return <p>Loading todos...</p>;
  if (isError) return <p>Error loading todos.</p>;
  if (todos.length === 0) return <p>No todos available.</p>;

  return (
    <div className="todo-list">
      <Menu />

      <Search onSearch={setSearchTerm} />

      <table border="1" cellPadding="10" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>image</th>
            <th>Status</th>
            <th>Edite</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td><img width={200} src={todo.image} alt="" /></td>
              <td>{todo.status === 0 ? "Pending" : "Completed"}</td>
              <td> <Link to={`/update/todo/${todo.id}`}>
                <button>Edit Todo</button>
              </Link></td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
