const autocannon = require('autocannon');

autocannon({
  url: 'http://localhost:3000',
  connections: 2, //default
  pipelining: 1, // default
  forever: true
  // duration: 10, // default
});

autocannon({
  url: 'http://127.0.0.1:4000/content/Jack',
  connections: 3, //default
  pipelining: 1, // default
  forever: true
  // duration: 10 // default
});

autocannon({
  url: 'http://127.0.0.1:4000/content/Curry',
  connections: 1, //default
  pipelining: 1, // default
  forever: true
  // duration: 10 // default
});