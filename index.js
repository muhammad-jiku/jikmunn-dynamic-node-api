const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// using middleware
app.use(express.json());

const champions = [
  {
    id: 1,
    title: 'WWE CHAMP',
    name: 'Roman Reigns',
    email: 'romanreignswwe@gmail.com',
  },
  {
    id: 2,
    title: 'Universal CHAMP',
    name: 'Roman Reigns',
    email: 'romanreignswwe@gmail.com',
  },
  {
    id: 3,
    title: 'US CHAMP',
    name: 'Austin theory',
    email: 'austinwwetheory@gmail.com',
  },
  {
    id: 4,
    title: 'IC CHAMP',
    name: 'Richochet',
    email: 'richochetwwe@gmail.com',
  },
];

app.get('/', (req, res) => {
  res.send(
    "Hello kids i'm from node.js and working with your beloved friends express.js and nodemon"
  );
});

app.get('/champions', (req, res) => {
  //   res.send({ id: 101, title: 'WWE CHAMP', name: 'Roman Reigns' });
  if (req.query.name) {
    const searchQuery = req.query.name.toLowerCase();
    const matched = champions.filter((c) =>
      c.name.toLowerCase().includes(searchQuery)
    );
    res.send(matched);
  } else if (req.query.email) {
    const searchQuery = req.query.email.toLowerCase();
    const matched = champions.filter((c) =>
      c.email.toLowerCase().includes(searchQuery)
    );
    res.send(matched);
  } else {
    res.send(champions);
  }
});

app.get('/champion/:id', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const champion = champions.find((u) => u.id === id);
  console.log(champion);
  res.send(champion);
});

app.post('/champion', (req, res) => {
  console.log('Request', req.body);
  const user = req.body;
  user.id = champions.length + 1;
  champions.push(user);
  res.send(user);
});

app.get('/fruits', (req, res) => {
  //   res.send({ id: 101, title: 'WWE CHAMP', name: 'Roman Reigns' });
  res.send([apples, banaans, mangoes]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
