const express = require('express')


// const postRouter = require('')
const server = express();

server.use(express.json());

// server.get('/')

const port = 5000;
server.listen(port, () => console.log(`*** Server listening on ${port} ***`))