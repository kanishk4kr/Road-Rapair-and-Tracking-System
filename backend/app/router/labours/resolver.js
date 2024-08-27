const express = require('express');
const datasources = require('./datasources');

const router = express.Router();


router.get('/',async (req,res)=>{
    const data = await datasources.find1();
    if(data) res.send(data);
    else res.send({none : "ok"});
})
router.get('/:appId', async (req, res) => { 
    const {appId} = req.params;
    try {
        const labour = await datasources.find(appId);
        res.json(labour);
    } catch (error) {
        res.end('Internal server error');
    }
});

router.post('/', async (req, res) => {
    const labour = req.body;
    try {
        const createlabour = await datasources.create(labour);
        console.log(createlabour);
        res.json(createlabour);
    } catch (error) {
        res.json(error);
    }
})
router.delete('/:appId',async (req,res) => {
    const {appId} = req.params;
    console.log(appId);
    try {
        const labour = await datasources.delete1(appId);
        res.json(labour);
    } catch (error) {
        res.end('Internal server error');
    }
})
router.patch('/:appId',async (req,res) => {
    const {appId} = req.params;
    const labour = req.body;
    console.log(appId,labour);
    try {
        const labour1 = await datasources.update(appId,labour);
        res.json(labour1);
    } catch (error) {
        res.end('Internal server error');
    }
})
module.exports = router;