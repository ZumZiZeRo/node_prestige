const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');

const logger = require('./utils/logger');
const errorHandler = require('./middlewares/errorHandler');
require('express-async-errors');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes.js');

dotEnv.config();

const mongoConnectionURI =
  process.env.MONMONGO_CLUSTER_URI !== null
    ? MONGO_CLUSTER_URI
    : MONMONGO_LOCAL_URI;
mongoose
  .connect(mongoConnectionURI, {
    userNewUrlParser: true,
    userUnifiedTopology: true,
    userCreateIndex: true,
  })
  .then(() => {
    console.log('Mongo Connected!');
  })
  .catch((error) => {
    console.log('failed to connect to mongo!');
  });

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send("project's api home route live!");
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("project's server is live!");
});

module.exports = app;
