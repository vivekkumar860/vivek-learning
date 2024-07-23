const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/myblog', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
