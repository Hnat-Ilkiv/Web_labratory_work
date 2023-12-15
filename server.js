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
  {
    title: "Item #1",
    id: uuidv4(),
    spaseMb: 234,
    timeSecond: 567
  },
  {
    title: "Item #2",
    id: uuidv4(),
    spaseMb: 345,
    timeSecond: 678
  }
];

// GET request
app.get('/item', (req, res) => {
  res.json(itemContainer);
});

// POST request
app.post('/item', (req, res) => {
  const { title, spaseMb, timeSecond } = req.body;

  if (itemContainer.some(item => item.title === title)) {
    res.status(400).json({ error: "An element with that name already exists." });
  } else if (!title) {
    res.status(400).json({ error: "Name is missing." });
  } else {
    const newItem = {
      title: title,
      id: uuidv4(),
      spaseMb: spaseMb,
      timeSecond: timeSecond
    };

    itemContainer.push(newItem);

    res.status(200).json({ message: "Item added successfully.", newItem });
  }
});

// PUT request
app.put('/item/:id', (req, res) => {
  const { id } = req.params;
  const { title, spaseMb, timeSecond } = req.body;

  const foundIndex = itemContainer.findIndex(item => item.id  === id);

  if (foundIndex !== -1) {
    if (itemContainer.some(item => item.title === title && item.id !== id)) {
      res.status(400).json({ error: "An element with that name already exists." });
    } else if (!title) {
      res.status(400).json({ error: "Name is missing." });
    } else {
      itemContainer[foundIndex] = {
        id: id,
        title: title,
        spaseMb: spaseMb,
        timeSecond: timeSecond
      };

      res.status(200).json({ message: "Item updated successfully.", updatedItem: itemContainer[foundIndex] });
    }
  } else {
    res.status(404).json({ error: "Item not found." });
  }
});

// DELETE request
app.delete('/item/:id', (req, res) => {
  const { id } = req.params;

  const foundIndex = itemContainer.findIndex(item => item.id === id);

  if (foundIndex !== -1) {
    const deletedItem = itemContainer[foundIndex];
    itemContainer.splice(foundIndex, 1);
    res.status(200).json({ message: "Item deleted successfully.", deletedItem });
  } else {
    res.status(404).json({ error: "Item not found." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
