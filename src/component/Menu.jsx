import { Link } from "react-router-dom";
import Counter from './Counter';

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/add/todo">Add Todo</Link>
        </li>
        <li>
            <Link to="/todo/list">Todo List</Link>
        </li>
        <li>
            <Link to="/update/todo">Update Todo</Link>
        </li>
        <li>
            <Link to="/counter/app">Counter app </Link>
        </li>
        <li>
            <Link to="/register">Register </Link>
        </li>
        <li>
            <Link to="/login">Login </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;