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
        const user = await datasources.find(appId);
        res.json(user);
    } catch (error) {
        res.end('Internal server error');
    }
});

router.post('/', async (req, res) => {
    const user = req.body;
    try {
        const createuser = await datasources.create(user);
        console.log(createuser);
        res.json(createuser);
    } catch (error) {
        res.json(error);
    }
})
router.delete('/:appId',async (req,res) => {
    const {appId} = req.params;
    console.log(appId);
    try {
        const user = await datasources.delete1(appId);
        res.json(user);
    } catch (error) {
        res.end('Internal server error');
    }
})
router.patch('/:appId',async (req,res) => {
    const {appId} = req.params;
    const user = req.body;
    console.log(appId,user);
    try {
        const user1 = await datasources.update(appId,user);
        res.json(user1);
    } catch (error) {
        res.end('Internal server error');
    }
})
module.exports = router;