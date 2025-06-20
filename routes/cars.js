const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');

router.get('/', carsController.getAllCars);
router.post('/', carsController.addCar);
router.delete('/:id', carsController.deleteCar);

module.exports = router;