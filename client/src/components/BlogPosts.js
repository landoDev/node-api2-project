import React, {useState, useEffect} from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import axios from 'axios'

const BlogPosts = () =>{
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/posts')
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=> console.log(err))
    },[])
    return(
        posts.map(post=>{
            return(
                <Row key={post.id}>
                <Col sm="6">
                  <Card body>
                    <CardTitle>{post.title}</CardTitle>
                    <CardText>{post.contents}</CardText>
                    <CardText>created: {post.created_at}</CardText>
                    <CardText>updated: {post.updated_at}</CardText>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>{post.title}</CardTitle>
                    <CardText>{post.contents}</CardText>
                    <CardText>created: {post.created_at}</CardText>
                    <CardText>updated: {post.updated_at}</CardText>
                  </Card>
                </Col>
              </Row>
            )
        })

    )
}

export default BlogPosts;