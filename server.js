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
    image: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png",
    name: "Name 1",
    age: 1,
    price: 1,
    description: "Description 1"
  },
  {
    id: uuidv4(),
    image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    name: "Name 2",
    age: 2,
    price: 2,
    description: "Description 2"
  },
  {
    id: uuidv4(),
    image: "https://w0.peakpx.com/wallpaper/569/300/HD-wallpaper-android-12-android-google-i-o-google-smartphone-background-thumbnail.jpg",
    name: "Name 3",
    age: 3,
    price: 3,
    description: "Description 3"
  },
  {
    id: uuidv4(),
    image: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png",
    name: "Name 1",
    age: 1,
    price: 1,
    description: "Description 1"
  },
  {
    id: uuidv4(),
    image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    name: "Name 2",
    age: 2,
    price: 2,
    description: "Description 2"
  },
  {
    id: uuidv4(),
    image: "https://w0.peakpx.com/wallpaper/569/300/HD-wallpaper-android-12-android-google-i-o-google-smartphone-background-thumbnail.jpg",
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
    let filteredKuns;

    if (filterBy === "search") {
      filteredKuns = objectContainer.filter((kun) => 
        (kun.name + kun.description).toLowerCase().includes(value.toLowerCase())
      );
    } else {
      filteredKuns = objectContainer.filter((kun) => kun[filterBy] == value);
    }

    res.json(filteredKuns);
  } else {
    res.json(objectContainer);
  }
});

app.get('/ages', (req, res) => {
  res.json(objectContainer
    .map(item => item.age)
    .filter((value, index, self) => self.indexOf(value) === index));
});

app.get('/prices', (req, res) => {
  res.json(objectContainer
    .map(item => item.price)
    .filter((value, index, self) => self.indexOf(value) === index));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/objects`);
});