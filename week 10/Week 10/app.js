const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', movieRoutes);

app.use('/users', userRoutes);

app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});