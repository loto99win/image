    const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 200
    },
    price: {
        type: Number,
        
    },
    saleOff: {
        type: Number,
        
    },
    tags: {
        type: [String],
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    stars: {
        type: Number,
        
    },
    imageUrl: {
        type: String,
        required: true
    },
    origins: {
        type: [String],
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;