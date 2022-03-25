require('dotenv').config();

const cors = require('cors');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || process.env.API_PORT;

app.use(express.json());
app.use(cors());

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(port, () => console.log(`Server is running on port ${port}. Press ctrl + C to exit.`));
    })
    .catch(err => console.error(err));