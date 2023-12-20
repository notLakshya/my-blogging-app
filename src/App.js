import React from 'react';
import './App.css';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import {BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/blog-details/:blogId" exact element={<BlogDetails />} />      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
