const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adviserRoutes = require('./src/routes/adviser.routes');
const userRoutes = require('./src/routes/user.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API advisers');
});

app.use('/api/v1/advisers', adviserRoutes);
app.use('/api/v1/user', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
