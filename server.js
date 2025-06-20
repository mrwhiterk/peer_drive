const express = require('express');
const app = express();
const carsRouter = require('./routes/cars');

app.use(express.json());
app.use('/cars', carsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})