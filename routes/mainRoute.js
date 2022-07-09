const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/cart', mainController.cart);
router.get('/product', mainController.product);

/*agregar ruta de CRUD*/

module.exports = router;