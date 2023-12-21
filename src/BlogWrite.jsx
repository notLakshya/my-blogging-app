import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainNavbar from './mainNavbar';
import MainFooter from './mainFooter';

const BlogInputForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate1 = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data to send in the POST request
    const formData = new FormData();
    formData.append('Title', title);
    formData.append('Author', author);
    formData.append('Content', content);
    formData.append('Image', image);


    // Reset the form after submission
    setTitle('');
    setAuthor('');
    setContent('');
    setImage(null);
  };
  const handleClick2 = () => {
    // Make a POST request using axios
    axios.post('https://jsonplaceholder.typicode.com/posts', {Title: 'lmao', Author: 'Don' , content: 'NATURE IS LMAO'})
      .then(function (response) {
        console.log(response);
        alert('BLOG SUBMITTED ....')
        // Use setTimeout with a function, not a number
        setTimeout(() => {
        navigate1('/Blog');
      }, 10);
      })
      .catch(function (error) {
        console.error(error);
      }); 
  };

  return (
    <>
    <MainNavbar />
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" value={author} onChange={handleAuthorChange} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={handleContentChange} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />
      {/* <button type="submit">Submit</button> */}
      <button onClick={handleClick2}>SUBMIT</button>
      
    </form>
    < MainFooter />
    </>
  );
};

export default BlogInputForm;