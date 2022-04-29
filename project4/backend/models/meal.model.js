const mongoose = require('mongoose')

const mealSchema = mongoose.Schema(
    {user:{
    type:mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'User'
},
    "title": String,
    "category": String,
    "ingredients": {
        "dairySection":[String],
        "meatSection": [String],
        "produceSection":[String],
        "drySection": [String],
        "spiceSection": [String],
    },
    "recipe": String
}
)

module.exports = mongoose.model('Meal', mealSchema)