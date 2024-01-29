const express = require('express');
const app = express();
const logger = require('morgan');
const axios = require('axios');
const cors = require('cors');
require("dotenv").config();

const PORT = 3001;

async function getMovieData(req, res){
    const fetchedData = await axios.get("http://api.themoviedb.org/3/list/1?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb");

    res.json(fetchedData.data);
}

const corsOptions = {
    // The origin set to * is being set to ANY URL
    origin: "*",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/api', getMovieData);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});