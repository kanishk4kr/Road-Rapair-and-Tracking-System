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
        const material = await datasources.find(appId);
        res.json(material);
    } catch (error) {
        res.end('Internal server error');
    }
});

router.post('/', async (req, res) => {
    const material = req.body;
    try {
        const creatematerial = await datasources.create(material);
        console.log(creatematerial);
        res.json(creatematerial);
    } catch (error) {
        res.json(error);
    }
})
router.patch('/',async (req,res)=>{
    const material = req.body;
    try {
        const updateMaterial = await datasources.updateall(material);
        console.log(updateMaterial);
        res.json(updateMaterial);
    } catch (error) {
        res.json(error);
    }
})
module.exports = router;