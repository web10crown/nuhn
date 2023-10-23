const express = require('express');
const app = express();
const cors = require('cors');
const checkCreditCard = require('./nuhn/nuhn');

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send("app is working fine");
})
app.post('/', async (req, res) => {
    var cardRes = checkCreditCard(req.body.number);
    res.status(200).json(cardRes);
})


app.listen(7000, () => {
    console.log("running on port 5000");
})

