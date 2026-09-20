const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const menuController = require('../controllers/menuController');
const orderController = require('../controllers/orderController');

router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);

// Keep the dynamic restaurant menu route intact
router.get('/restaurants/:id/menu', menuController.getMenuByRestaurant);

// ADDED: Order management routes
router.post('/orders', orderController.createOrder);
router.get('/orders/:id', orderController.getOrder); 

// ADDED: Step 14 update route
router.post('/orders/:id/update', orderController.updateOrder);

router.post('/orders/:id/cancel', orderController.cancelOrder);
module.exports = router;
