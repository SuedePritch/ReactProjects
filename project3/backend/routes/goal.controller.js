const asyncHandler = require('express-async-handler')
const Goal = require('../models/goal.model')
const User = require('../models/user.model')


//GET /api/goals
//ACCESS PRIVATE
const getGoals =asyncHandler(async (req,res) =>{
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})




//POST /api/goals
//ACCESS PRIVATE
const newGoal =asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add a text field')
    }
    const goal = await Goal.create({
        text:req.body.text,
        user: req.user.id
    })
    res.status(200).json({message: 'New Goal Set'})
})



//PUT /api/goals/:id
//ACCESS PRIVATE
const editGoal =asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString()!== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedGoal)
})



//DELETE /api/goals/:id
//ACCESS PRIVATE
const deleteGoal =asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString()!== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    await goal.remove()
    res.status(200).json({id: req.params.id})
})




module.exports = {
    getGoals,
    newGoal,
    editGoal,
    deleteGoal
}