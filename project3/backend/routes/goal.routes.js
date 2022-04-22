const express = require('express')
const router = express.Router();
const {getGoals, newGoal, editGoal, deleteGoal} = require('../routes/goal.controller')

// router.get('/', getGoals)
// router.post('/', newGoal)
// router.put('/:id', editGoal)
// router.delete('/:id', deleteGoal)
router.route('/').get(getGoals).post(newGoal);
router.route('/:id').put(editGoal).delete(deleteGoal);

module.exports = router