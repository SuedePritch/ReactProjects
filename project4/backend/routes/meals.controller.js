const asyncHandler = require('express-async-handler')
const Meal = require('../models/meal.model')
const User = require('../models/user.model')


//GET /api/Meals
//ACCESS PRIVATE
const getMeals =asyncHandler(async (req,res) =>{
    const meals = await Meal.find({user : req.user.id})
    res.status(200).json(meals)
})



//POST /api/Meals
//ACCESS PRIVATE
const newMeal =asyncHandler(async (req,res) =>{
    if(!req.body.title){
        res.status(400)
        throw new Error ('Please add a title')
    }
    const meal = await Meal.create({
        title:req.body.title,
        category:req.body.category,
        ingredients:req.body.ingredients,
        recipe:req.body.recipe,
        user: req.user.id

    })
    res.status(200).json({meal})
})



//PUT /api/Meals/:id
//ACCESS PRIVATE
const editMeal =asyncHandler(async (req,res) =>{
    const meal = await Meal.findById(req.params.id)
    if(!meal){
        res.status(400)
        throw new Error('Meal not Found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(meal.user.toString()!== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedMeal)
})



//DELETE /api/Meals/:id
//ACCESS PRIVATE
const deleteMeal =asyncHandler(async (req,res) =>{
    const meal = await Meal.findById(req.params.id)
    if(!meal){
        res.status(400)
        throw new Error('Meal not Found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    if(meal.user.toString()!== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    await meal.remove()
    res.status(200).json({id: req.params.id})
})




module.exports = {
    getMeals,
    newMeal,
    editMeal,
    deleteMeal
}