const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// https://png.pngtree.com/png-clipart/20230102/original/pngtree-business-man-avatar-png-image_8855195.png

let objectContainer = [
  {
    id: uuidv4(),
    image: "",
    name: "Name 1",
    age: 1,
    price: 1,
    description: "Description 1"
  },
  {
    id: uuidv4(),
    image: "",
    name: "Name 2",
    age: 2,
    price: 2,
    description: "Description 2"
  },
  {
    id: uuidv4(),
    image: "",
    name: "Name 3",
    age: 3,
    price: 3,
    description: "Description 3"
  },
  {
    id: uuidv4(),
    image: "",
    name: "Name 4",
    age: 4,
    price: 4,
    description: "Description 4"
  },
  {
    id: uuidv4(),
    image: "",
    name: "Name 5",
    age: 5,
    price: 5,
    description: "Description 5"
  },
  {
    id: uuidv4(),
    image: "",
    name: "Name 6",
    age: 6,
    price: 6,
    description: "Description 6"
  }
];

// GET request

// app.get('/objects', (req, res) => {
//   res.json(objectContainer);
// });

app.get('/objects', (req, res) => {
  const { filterBy, value } = req.query;

  if (filterBy && value) {
    const filteredWaifus = objectContainer.filter(waifu => waifu[filterBy] == value);
    res.json(filteredWaifus);
  } else {
    res.json(objectContainer);
  }
});

app.get('/age')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/objects`);
});