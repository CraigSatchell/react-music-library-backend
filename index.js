const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('hello');
});


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log("Server started. Listening on port 5000");
})
