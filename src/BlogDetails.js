import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "./mainNavbar.js";
import MainFooter from "./mainFooter.js";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Card, Button, Col, Row } from "react-bootstrap";


const BlogDetails = () => {
    const [posts, setPosts] = useState('');
    const [comments, setcomments] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const comment = "/comments";
    const bid = useParams();
    useEffect(() =>{
        axios.get(`${url}${bid.bid}${comment}`)
        .then((response) => {
            // const res = response.data.filter((item) => item.postId === id );
            setcomments(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.error("Error fetching comments:", error);
          });
      }, []);
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
            <Card>
                            <Card.Body>
                                <Card.Title>Post: {posts.title}</Card.Title>
                                <Card.Text>{posts.body}</Card.Text>        
                            </Card.Body>
                            <Col>
                            <h3>Comments</h3>
            {comments.map((comment) => (
                <Row key={comment.id} md={1}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Name: {comment.name}</Card.Title>
                            <Card.Subtitle>Email:{comment.email}</Card.Subtitle>
                            <Card.Body>Description: {comment.body}</Card.Body>
                        </Card.Body>
                    </Card>
                </Row>
            ))}
            <Button id={posts.id}><Link to={'/blog'}>Back to Blogs</Link></Button> 
        </Col>
                        </Card>
            <MainFooter />
        </>
    );
};

export default BlogDetails;
