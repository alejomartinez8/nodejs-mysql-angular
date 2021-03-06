const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const adviserRoutes = require('./src/routes/adviser.routes');
const authRoutes = require('./src/routes/user.routes');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API advisers');
});

app.use('/api/v1/advisers', adviserRoutes);
app.use('/api/v1/auth', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
