import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";


import Login from './Login';
import Layout from './Layout';
import Content from './Dashboard/Content';
import Category from './Category/Category';
import Author from "./Author/Author";
import Books from "./Books/Books"
import Comment from "./Comment/Comment"
import User from "./user/User"
import Setting from "./Settings/Setting"
import Register from './Register/Register';
function App() {
  const [user,setUser] = useState(localStorage.getItem('name'))

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Layout setUser={setUser}/> : <Navigate  to={'/login'}/>}>
          <Route index element={<Content />} />
          <Route path='category' element={<Category />} />
          <Route path='books' element={<Books />} />
          <Route path='comment' element={<Comment />} />
          <Route path='user' element={<User />} />
          <Route path='author' element={<Author />} />
          <Route path='setting' element={<Setting />} />
        </Route>
        <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
