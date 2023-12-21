import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "./mainNavbar.js";
import MainFooter from "./mainFooter.js";
import axios from 'axios'
import {Link} from 'react-router-dom'


const BlogDetails = () => {
    const [posts, setPosts] = useState('');
    const url = 'https://jsonplaceholder.typicode.com/posts/';

    const bid = useParams();

    useEffect(() => {
        console.log(bid);
        // Fetch posts when the component mounts
        axios
            // .get(`${url}${bid}`)
            // .get('https://jsonplaceholder.typicode.com/posts/22')
            .get(`${url}${bid.bid}`)
            .then((response) => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <>
            <MainNavbar />
            <p>{posts.title}</p>
            <p>{posts.body}</p>
            <button><Link to='/blog'>Back to Blogs</Link></button>
            <MainFooter />
        </>
    );
};

export default BlogDetails;
