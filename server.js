const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb+srv://m001-student:myPassword2020!@sandbox.u8xwb.mongodb.net/workout?retryWrites=true&w=majority' || 'mongodb://localhost/workout', {
  useNewUrlParser: true
});

// routes
app.use(require('./routes/html-routes'));
app.use(require('./routes/api-routes.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
mongodb
