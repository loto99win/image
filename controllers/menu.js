const Menu = require('../models/menu');

const menuControllers = {
    // add menu
    addMenu : async(req, res) => {

        const par = req.body.parentId;

        const result = await Menu.findById(par);

        if(result === null) {
            const menuObject = {
                routerLink: req.body.routerLink,
                label: req.body.label,
                icon: req.body.icon
            };
    
            const newMenu = new Menu(menuObject);
            const saveMenu = await newMenu.save();
            return res.status(200).json(saveMenu);
        }

        const filter = {
            _id: req.body.parentId
        }
        const update = {
            items: [{
                routerLink: req.body.routerLink,
                label: req.body.label
            }]
        }

        const newUpdate = await Menu.updateOne(filter, { $push: update });

        return res.status(200).json(newUpdate);
    },

    // get all menu
    getMenu: async(req, res) => {
        const allMenu = await Menu.find();
        return res.status(200).json(allMenu);
    },
}

module.exports = menuControllers;