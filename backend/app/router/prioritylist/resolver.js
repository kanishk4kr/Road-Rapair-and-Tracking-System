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
        const list = await datasources.find(appId);
        res.json(list);
    } catch (error) {
        res.end('Internal server error');
    }
});

router.post('/', async (req, res) => {
    const list = req.body;
    try {
        const createList = await datasources.create(list);
        console.log(createList);
        res.json(createList);
    } catch (error) {
        res.json(error);
    }
})
router.delete('/:appId',async (req,res) => {
    const {appId} = req.params;
    console.log(appId);
    try {
        const list = await datasources.delete1(appId);
        res.json(list);
    } catch (error) {
        res.end('Internal server error');
    }
})
router.patch('/:appId',async (req,res) => {
    const {appId} = req.params;
    const list = req.body;
    console.log(appId,list);
    try {
        const list1 = await datasources.update(appId,list);
        res.json(list1);
    } catch (error) {
        res.end('Internal server error');
    }
})
module.exports = router;