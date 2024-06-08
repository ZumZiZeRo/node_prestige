const express = require('express');

const userRoutes = require('./routes/userRoutes.js');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send("project's api home route live!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("project's server is live!");
});

module.exports = app;
