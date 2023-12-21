import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import MainNavbar from './mainNavbar'
import MainFooter from './mainFooter'
import { Link } from 'react-router-dom'
const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts when the component mounts
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <Container className="mt-4">



            <MainNavbar />
            <Row>
                {posts.map((post, i) => (
                    <Col key={i} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                                <Button id={post.id}><Link to={`/blog-details/${post.id}`}>Read more</Link></Button>              </Card.Body>
                        </Card>
                    </Col>
                ))}

              

                )


            </Row>
            <MainFooter />
        </Container >
    );
};


export default Blog;