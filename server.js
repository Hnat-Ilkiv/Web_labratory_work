const express = require('express'); // connect the Express module
const cors = require('cors'); // connect the CORS module
const { v4: uuidv4 } = require('uuid'); // connect the UUID module
const app = express(); // create a new instance of the Express application
const port = 3000; // define the port on which the server listens to requests

app.use(cors()); // allows all sources access
app.use(express.json()); // setting Express to understand json syntax

let itemContainer = [
  {
    title: "Item #0",
    id: uuidv4(),
    spaseMb: 123,
    timeSecond: 456
  },
];

// GET request
app.get('/item', (req, res) => {
  res.json(itemContainer);
});

// POST request
app.post('/item', (req, res) => {
  res.send('Got a POST request');
});

// PUT request
app.put('/item', (req, res) => {
  res.send('Got a PUT request at /item');
});

// DELETE request
app.delete('/item', (req, res) => {
  res.send('Got a DELETE request at /item');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
