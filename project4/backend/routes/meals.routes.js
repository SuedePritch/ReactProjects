const express = require('express')
const router = express.Router();
const {getMeals, newMeal, editMeal, deleteMeal} = require('./meals.controller')
const { protect } = require('../middleware/authenticateMiddleware')

router.route('/').get(getMeals).post(protect, newMeal);
router.route('/:id').put(protect, editMeal).delete(deleteMeal);

module.exports = router