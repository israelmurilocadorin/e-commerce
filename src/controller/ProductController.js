const Product = require ('../model/Product');

module.exports = {
    async index (req, res) {
        try {
            const product = await Product.findAll()
            return res.json(product)    
        }
        catch(err) {
            console.error("There was an error:", err.message);
        }
    },

    async store (req, res) {
        try {
            const {description , price} = req.body;
            const product = await Product.create({description, price})
            return res.json(product)
        }
        catch (err) {
            console.error("There was an error:", err.message);
        }
        
    }
}