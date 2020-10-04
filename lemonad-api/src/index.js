const express =  require('express');
const  cors = require('cors');
const data = require('./lemonadStore');
const fs = require('fs');


const  app = express();

app.use(cors());


app.use(express.json());


const port = 5001 || process.env.PORT;

app.listen(port,() => {
    console.log(`server started on port ${port}`)
});

app.get('/', (req, res) => {
    res.send("I am working");
});

app.get('/lemons', (req,res) => {
res.send({"lemons" : data["total-lemons"]});
});

app.post('/cups', (req,res) => {
const type = req.body.type;
const amount = req.body.amount;

const cups =  data.cups.filter((el) => el.type === type);

const dataSaved = {
    price: amount * cups[0].price,
    lemonUsed : (amount * cups[0].lemons),
    type,
    amount
}

if(data["total-lemons"] - (amount * cups[0].lemons)){
    res.status(500).send({"error": "We do not have enough lemons"});
}

fs.readFile('C://Users/Ejer/Documents/GitHub/barkery/lemonade-stand/lemonad-api/src/lemonadStore.json', ((err, fileData) => {
    if(err) console.log(err);
    const json = JSON.parse(fileData);
        console.log(json);
   json.orders.push(dataSaved);
   json["total-lemons"] = json["total-lemons"] - (amount * cups[0].lemons)

   fs.writeFileSync('C://Users/Ejer/Documents/GitHub/barkery/lemonade-stand/lemonad-api/src/lemonadStore.json', JSON.stringify(json));
} ))

res.send({data: dataSaved});


});


app.get('/order', (req, res) => {
    const order = data.orders[data.orders.length -1];

    res.send({order});
})




