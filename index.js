require('dotenv').config();
const express = require('express')
const cors = require('cors')

const postRouter = require('./data/postRouter')
const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/posts", postRouter)

server.get('/', (req, res) => {
    const message = process.env.MESSAGE
    res.status(200).json({api: "green", message});
  });

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`*** Server listening on ${port} ***`))