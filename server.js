const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let items_list = [
  {
        title: "Funny animals #1",
        used_spase_mb: 846,
        video_time_s: 1743
    },
    {
        title: "Funny animals #2",
        used_spase_mb: 97,
        video_time_s: 485
    },
    {
        title: "Funny animals #3",
        used_spase_mb: 53,
        video_time_s: 365
    }
];

// Обробник GET-запиту на отримання всіх елементів
app.get('/items', (req, res) => {
  res.json(items_list);
});

// Обробник POST-запиту для створення нового елемента
app.post('/items', (req, res) => {
  const newItem = req.body;
  items_list.push(newItem);
  res.json({ message: 'Item created successfully', item: newItem });
});

// Обробник PUT-запиту для оновлення елемента за його ідентифікатором
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;

  // Логіка оновлення елемента в твоїй базі даних
  // Наприклад:
  for (let i = 0; i < items_list.length; i++) {
    if (items_list[i].id === itemId) {
      items_list[i] = updatedItem;
      break;
    }
  }

  res.json({ message: 'Item updated successfully' });
});

// Обробник DELETE-запиту для видалення елемента за його ідентифікатором
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;

  // Логіка видалення елемента з твоєї бази даних
  // Наприклад:
  items_list = items_list.filter(item => item.id !== itemId);

  res.json({ message: 'Item deleted successfully' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
