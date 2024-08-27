const express = require('express');
const datasources = require('./datasources');

const router = express.Router();
router.get('/', async (req,res) => {
    try {
        const complaint = await datasources.find1();
        res.json(complaint);
    } catch (error) {
        res.end('Internal server error');
    } 
})
router.get('/:appId', async (req, res) => {
    const {appId} = req.params;
    try {
        const complaint = await datasources.find(appId);
        res.json(complaint);
    } catch (error) {
        res.end('Internal server error');
    } 
});

router.post('/', async (req, res) => {
    const complaint = req.body;
    try {
        const createcomplaint = await datasources.create(complaint);
        console.log(createcomplaint);
        res.json(createcomplaint);
    } catch (error) {
        res.json(error);
    }
})

router.delete('/:appId', async (req,res) => {
    const {appId} = req.params;
    try {
        const deletecomplaint = await datasources.delete1(appId);
        res.json(deletecomplaint);
    } catch (error) {
        res.json(error);
    }
})
module.exports = router;