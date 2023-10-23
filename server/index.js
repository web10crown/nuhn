const express = require('express');
const app = express();
const cors = require('cors');
const checkCreditCard = require('./nuhn');
app.use(cors({
    origin: 'https://nuhn.vercel.app/',
    methods: 'GET,POST,PUT,DELETE',
}));
app.use(express.json());


app.post('/', async (req, res) => {
    var cardRes = checkCreditCard(req.body.number);
    res.status(200).json(cardRes);
})


app.listen(5000, () => {
    console.log("running on port 5000");
})

