const express = require('express')


const postRouter = require('./data/postRouter')
const server = express();

server.use(express.json());
server.use("/api/posts", postRouter)

server.get('/', (req, res) => {
    res.send(`
      <h2>Blog API</h>
      <p>Good to go Chief, happy coding</p>
    `);
  });

const port = 5000;
server.listen(port, () => console.log(`*** Server listening on ${port} ***`))