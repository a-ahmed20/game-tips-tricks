const Tip = require('../models/Tips');

exports.addTip = async (req, res) => {
    try {
        const { user_id, title, description, category } = req.body;
        await Tip.create(user_id, title, description, category);
        res.status(201).json({ message: 'Tip added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAllTips = async (req, res) => {
    try {
        const tips = await Tip.getAll();
        res.json(tips);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
