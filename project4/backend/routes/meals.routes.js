const express = require('express')
const router = express.Router();
const {getMeals, newMeal, editMeal, deleteMeal} = require('./meals.controller')


router.route('/').get (getMeals).post(newMeal);
router.route('/:id').put(editMeal).delete(deleteMeal);

module.exports = router