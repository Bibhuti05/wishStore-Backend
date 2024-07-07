const express = require('express');
const sequelize = require('./db/sequelize');
const { User, Data } = require('./db/models');

const app = express();
const port = 3000;


sequelize.sync({ alter: true }).then(() => {
  console.log('SQLite database initialized successfully');
});

app.use(express.json());


app.get('/api/users/create', async (req, res) => {
  
  const AdminUser =  await User.create({
    name: 'John Doe',
    favoriteColor: 'blue',
    age: 30,
    cash: 1000,
    role: 'admin',
  });
  
  loginBtn.style.display = "inline-block";
  res.send(AdminUser);
})

app.get('/api/data', async (req, res) => {
  const dataEntries = await Data.findAll();
  res.json(dataEntries);
});

app.post('/api/data', async (req, res) => {
  const newData = req.body;
  const newDataInstance = await Data.create(newData);
  res.status(201).json(newDataInstance);
});

app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.status(200).json({ message: 'Deleted successfully' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    const updatedData = req.body;
    data[index] = updatedData;
    res.json(updatedData);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});