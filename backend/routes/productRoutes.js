const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const product = await Product.find()
        res.json(product);
    } catch (error) {
        console.error(error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product);
    } catch (error) {
        console.error(error)
    }
});

module.exports = router;