
import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import AddTodoForm from './component/AddTodoForm';



import TodoList from './component/TodoList';
import UpdateTodo from './component/UpdateTodo';
import Counter from './component/Counter';


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add/todo" element={<AddTodoForm />} />
          <Route path="/todo/list" element={<TodoList />} />
          <Route path="/update/todo" element={<UpdateTodo />} />
          <Route path="/counter/app" element={<Counter />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;
