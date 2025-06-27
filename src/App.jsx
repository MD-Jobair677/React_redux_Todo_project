
import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import AddTodoForm from './component/AddTodoForm';



import TodoList from './component/TodoList';
import UpdateTodo from './component/UpdateTodo';
import Counter from './component/Counter';
import Register from './component/Register';
import Login from './component/login';



const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add/todo" element={<AddTodoForm />} />
          <Route path="/todo/list" element={<TodoList />} />
          <Route path="/update/todo/:id" element={<UpdateTodo />} />
          <Route path="/counter/app" element={<Counter />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={< Login/>} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;
