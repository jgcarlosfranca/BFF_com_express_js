const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.urlencoded({ extended: true }));



app.post('/api/exemploPost/', async(req, res) => {
    let { payload } = req.body
    console.log('teste', payload)

    return res.json({ payload });
});

app.listen(1337, (req, res) => console.log("running on 1337"));