import React, {useState, useEffect} from 'react';
import { Card, CardTitle, CardText, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

const BlogPosts = () =>{
    const [posts, setPosts] = useState([]);
    const [addPost, setAddPost] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:5000/api/posts')
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=> console.log(err))
    },[])

    const handleChanges = e =>{
        setAddPost({
            ...addPost,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit= e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/posts', addPost)
        .then(res =>{
            alert('Post added to database');
            setAddPost({});
            window.location.reload();
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Title</Label>
                <Input name='title' onChange={handleChanges}/>
            </FormGroup>
            <FormGroup>
                <Label>Contents</Label>
                <Input name='contents' onChange={handleChanges} />
            </FormGroup>
            <Button variant='primary'>Post</Button>
        </Form>
        {posts.map(post=>{
            return(
                <Row key={post.id}>
                  <Card body>
                    <CardTitle>{post.title}</CardTitle>
                    <CardText>{post.contents}</CardText>
                    <CardText>created: {post.created_at}</CardText>
                    <CardText>updated: {post.updated_at}</CardText>
                  </Card>
              </Row>
            )
        })}
        </div>  
    )
}

export default BlogPosts;