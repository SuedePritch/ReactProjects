const express = require('express')
const router = express.Router();
const {getGoals, newGoal, editGoal, deleteGoal} = require('../routes/goal.controller')
const {protect} = require('../middleware/authenticateMiddleware')

router.route('/').get(protect, getGoals).post(protect, newGoal);
router.route('/:id').put(protect, editGoal).delete(protect, deleteGoal);

module.exports = router