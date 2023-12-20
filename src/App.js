import React from 'react';
import './App.css';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import Home from './home'
import Login from './Login'
import RegisterUser from './RegisterUser'
import BlogWrite from './BlogWrite'
import {BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/blog-details/:blogId" exact element={<BlogDetails />} />      
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path='/Login' element={ <Login/> }></Route>
      <Route path='/RegisterUser' element={ <RegisterUser/> }></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/BlogWrite' element={<BlogWrite/>}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
