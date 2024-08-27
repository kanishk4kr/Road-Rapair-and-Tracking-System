const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseInit = require('./app/config/mongoose');
const complaintRouter = require('./app/router/complaints/resolver')
const materialRouter = require('./app/router/material/resolver')
const labourRouter = require('./app/router/labours/resolver')
const userRouter = require('./app/router/user/resolver')
const listRouter = require('./app/router/prioritylist/resolver')
require('dotenv').config();
const app = express();
mongooseInit();

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.status(200).end("Sanity Check : OK");
})

app.use('/complaint', complaintRouter);
app.use('/resource/material', materialRouter);
app.use('/resource/labour', labourRouter);
app.use('/user',userRouter);
app.use('/list',listRouter);

const port = process.env.PORT || 8000 ;
app.listen(port, () =>{
    console.log(`server at ${port}`);
})
