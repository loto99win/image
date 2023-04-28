const { model, Schema } = require('mongoose');

const menuSchema = new Schema({
    routerLink: {
        type: String,
        trim: true,
        lowercase: true
    },
    icon: {
        type: String
    },
    label: {
        type: String,
        required: true
    },
    items: [
        {
            routerLink: { type: String, lowercase: true, trim: true},
            label: { type: String}
        }
    ],
    parentId: {
        type: String
    }
}, { timestamps: true});

module.exports = model('Menu', menuSchema);