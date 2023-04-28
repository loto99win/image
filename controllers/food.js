const Food = require('../models/food');

exports.getFoods = async(req, res) => {
    const foods = await Food.find();
    res.status(200).json({foods});
}

exports.addFood = async(req, res) => {
    const {name, price, saleOff, tags, favorite, stars, origins, cookTime} = req.body;
    const imageUrl = 'http://localhost:2000/images/' + req.file.filename;
    const food = new Food({
        name, price, saleOff, tags, favorite,
        stars, imageUrl, origins, cookTime
    });

    const createFood = await food.save();
    res.status(201).json({
        food: {
            ...createFood._doc,
        }
    })
}