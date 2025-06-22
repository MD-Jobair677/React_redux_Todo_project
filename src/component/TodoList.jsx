import Menu from "./Menu";
import { useGetTodoListQuery } from "../core/data/redux/features/todo/getTodoList";

const TodoList = () => {
  const { data, isLoading, isError } = useGetTodoListQuery();
  const todos = Array.isArray(data?.todos) ? data.todos : [];

  console.log("data:", data);
  console.log("todos:", todos);

  if (isLoading) return <p>Loading todos...</p>;
  if (isError) return <p>Error loading todos.</p>;
  if (todos.length === 0) return <p>No todos available.</p>;

  return (
    <div className="todo-list">
      <Menu />
      <table border="1" cellPadding="10" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Edite</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td>{todo.status === 0 ? "Pending" : "Completed"}</td>
              <td>Edite</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
