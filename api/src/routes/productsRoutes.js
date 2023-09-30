const { Router } = require('express');
const router = Router();
const { getProducts } = require('../controllers/productsControllers.js');


router.get('/lista', getProducts)


module.exports = router;