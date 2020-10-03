const express =  require('express');
const  cors = require('cors');
const data = require('./lemonadStore');


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

res.send({data: {
        price: amount * cups[0].price,
        lemonUsed :  (amount * cups[0].lemons) ,
        type,
        amount
        }
        });
});




