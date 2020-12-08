const Product = require("../models/Product")

module.exports = {
    get: {
        async byId(req, res) {
            try {
                const product = await Product.findOne({ _id: req.params.id });
                res.json({ product });
            } catch(err) {
                return res.json({ error: "No products!" });
            }
        },
        
        async all(req, res) {
            const products = await Product.find({ });
            res.json({ products });
        }
    },

    post: {
        async add(req, res) {
            const product = await Product.create({ ...req.body });
            res.json({ product });
        }
    }
}