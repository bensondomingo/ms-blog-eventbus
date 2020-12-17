const express = require('express');
const router = express.Router();
const axios = require('axios');

const events = [];

// simple event bus implementation
router.post('/', (req, res) => {
  const event = req.body;
  events.push(event);

  axios.post('http://localhost:4001/events', event); // comments service
  axios.post('http://localhost:4000/events', event); // posts service
  axios.post('http://localhost:4002/events', event); // query service
  axios.post('http://localhost:4003/events', event); // comment-moderation service

  res.send({ status: 'OK' });
});

router.get('/', (req, res) => {
  res.send(events);
});

module.exports = router;
