const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const server = express();
server.use(cors());
server.use(express.json());

/** Memory to store sessions */
const sessions = {};

/**
 * Creates a session
 */
server.post('/session', (req, res) => {
  const sessID = Math.random().toString(36).substring(2,8);
  sessions[sessID] = []; // creates a queue for the session
  res.json({sessID});
});

/**
 * Add a song to the queue
 */
server.post('/session/:id/track', (req, res) => {
  const sessID = req.params.id;
  const {title, artist} = req.body;
  sessions[sessID].push({title, artist}); // add song to queue
  res.json({message: `Track ${title} added to session ${sessID}`});
});

/**
 * Get the next song in the queue
 */
server.get('/session/:id/next', (req, res) => {
  const sessID = req.params.id;
  const queue = sessions[sessID];
  if (!queue || queue.length == 0) {
    return res.status(404).json({message: 'No tracks in queue'});
  }
  const next = queue[0];
  res.json({next});
});

/**
 * Gets the entire queue
 */
server.get('/session/:id/queue', (req, res) => {
  const sessID = req.params.id;
  const queue = sessions[sessID];
  res.json({queue});
}) 

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
