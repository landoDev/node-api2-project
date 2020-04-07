const express = require('express')


// const postRouter = require('')
const server = express();
server.use(express.json());

const db = require('./data/db')

server.get('/', (req, res) => {
    res.send(`
      <h2>Blog API</h>
      <p>Good to Go Chief, happy coding</p>
    `);
  });

// ENDPOINTS

server.post('/api/posts', (req, res) => {
    const newPost = req.body
    newPost.title == "" || newPost.contents == "" ? res.status(400).json({errorMessage: 'Title or contents missing. Please address and try again'})
    :
    db.insert(req.body)
    .then(post =>{
        res.status(201).json(post)
    })
    .catch(err => res.status(500).json({errorMessage: 'Something went wrong on our end'}))
})

server.post('/api/posts/:id/comments', (req, res) => {
    const newComment = req.body
    newComment.text == "" || !Number.isInteger(newComment.post_id) ? res.status(400).json({errorMessage: 'Text or Post Id missing. Include text or insure that post_id is of type Integer.'})
    :
    db.insertComment(req.body)
    .then(comment =>{
        res.status(201).json(comment)
    })
    .catch(err => res.status(500).json({errorMessage: 'Something went wrong on our end'}))
})

server.get('/api/posts', (req, res) => {
    db.find()
    .then(posts =>{
        res.status(200).json(posts)
    })
    .catch(err => res.status(500).json({errorMessage: "The posts information could not be retrieved."}))
})

const port = 5000;
server.listen(port, () => console.log(`*** Server listening on ${port} ***`))