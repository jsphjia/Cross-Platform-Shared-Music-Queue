const { createServer } = require('node:http');

const express = require('express');
const cors = require('cors');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.use(cors());
server.use(express.json());

/** Memory to store sessions */
const sessions = {};

/**
 * Creates a session
 */
server.post('/session', (req, res)) => {
  const sessID = Math.random().toString(36).substring(2,8);
  sessions[sessID] = []; // creates a queue for the session
  res.json({sessID});
}

/**
 * Add a song to the queue
 */
server.post('/session/:id/track', (req, res)) => {
  const sessID = req.params.id;
  const {title, artist} = req.body;

  sessions[sessID].push({title, artist}); // add song to queue
  res.json({message: 'Track ${title} added to session ${sessID}'})
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
