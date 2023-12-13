const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let objectContainer = [
  {
    id: uuidv4(),
    image: "https://images.wallpaperscraft.ru/image/single/paren_glaza_kapiushon_1045265_3415x3415.jpg",
    name: "Name 1",
    price: 1,
    description: "Description 1"
  },
  {
    id: uuidv4(),
    image: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
    name: "Name 2",
    price: 2,
    description: "Description 2"
  },
  {
    id: uuidv4(),
    image: "https://png.pngtree.com/png-clipart/20230102/original/pngtree-business-man-avatar-png-image_8855195.png",
    name: "Name 3",
    price: 3,
    description: "Description 3"
  },
  {
    id: uuidv4(),
    image: "https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png",
    name: "Name 4",
    price: 4,
    description: "Description 4"
  },
  {
    id: uuidv4(),
    image: "./src/images/logo_uncrop.png",
    name: "Name 5",
    price: 5,
    description: "Description 5"
  },
  {
    id: uuidv4(),
    image: "./images/logo.png",
    name: "Name 6",
    price: 6,
    description: "Description 6"
  },
  {
    id: uuidv4(),
    image: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
    name: "Name 7",
    price: 7,
    description: "Description 7"
  },
  {
    id: uuidv4(),
    image: "https://png.pngtree.com/png-clipart/20230102/original/pngtree-business-man-avatar-png-image_8855195.png",
    name: "Name 8",
    price: 8,
    description: "Description 8"
  },
  {
    id: uuidv4(),
    image: "https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png",
    name: "Name 9",
    price: 9,
    description: "Description 9"
  },
  {
    id: uuidv4(),
    image: "./images/logo_uncrop.png",
    name: "Name 10",
    price: 10,
    description: "Description 10"
  },
  {
    id: uuidv4(),
    image: "/home/my/PARA/Pro…y_work/src/images/logo.png",
    name: "Name 11",
    price: 11,
    description: "Description 11"
  },
  {
    id: uuidv4(),
    image: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
    name: "Name 12",
    price: 12,
    description: "Description 12"
  },
  {
    id: uuidv4(),
    image: "https://png.pngtree.com/png-clipart/20230102/original/pngtree-business-man-avatar-png-image_8855195.png",
    name: "Name 13",
    price: 13,
    description: "Description 13"
  },
  {
    id: uuidv4(),
    image: "https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png",
    name: "Name 14",
    price: 14,
    description: "Description 14"
  },
  {
    id: uuidv4(),
    image: "/home/my/PARA/Pro…y_work/src/images/logo_uncrop.png",
    name: "Name 15",
    price: 15,
    description: "Description 15"
  }
];

// GET request
app.get('/objects', (req, res) => {
  res.json(objectContainer);
});

// POST request
app.post('/item', (req, res) => {
  const { title, spaseMb, timeSecond } = req.body;

  if (objectContainer.some(item => item.title === title)) {
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

    objectContainer.push(newItem);

    res.status(200).json({ message: "Item added successfully.", newItem });
  }
});

// PUT request
app.put('/item/:id', (req, res) => {
  const { id } = req.params;
  const { title, spaseMb, timeSecond } = req.body;

  const foundIndex = objectContainer.findIndex(item => item.id  === id);

  if (foundIndex !== -1) {
    if (objectContainer.some(item => item.title === title && item.id !== id)) {
      res.status(400).json({ error: "An element with that name already exists." });
    } else if (!title) {
      res.status(400).json({ error: "Name is missing." });
    } else {
      objectContainer[foundIndex] = {
        id: id,
        title: title,
        spaseMb: spaseMb,
        timeSecond: timeSecond
      };

      res.status(200).json({ message: "Item updated successfully.", updatedItem: objectContainer[foundIndex] });
    }
  } else {
    res.status(404).json({ error: "Item not found." });
  }
});

// DELETE request
app.delete('/item/:id', (req, res) => {
  const { id } = req.params;

  const foundIndex = objectContainer.findIndex(item => item.id === id);

  if (foundIndex !== -1) {
    const deletedItem = objectContainer[foundIndex];
    objectContainer.splice(foundIndex, 1);
    res.status(200).json({ message: "Item deleted successfully.", deletedItem });
  } else {
    res.status(404).json({ error: "Item not found." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});