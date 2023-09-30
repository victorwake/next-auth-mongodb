const { Router } = require('express');
const router = Router();
const  test= require('./testRoutes');
const  getProducts= require('./productsRoutes');


router.use('/', test);
router.use('/products', getProducts);


module.exports = router;

