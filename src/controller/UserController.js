const User = require ('../model/User');

module.exports = {
    async index (req, res) {
        try {
            const users = await User.findAll()
            return res.json(users)    
        }
        catch(err) {
            console.error("There was an error:", err.message);
        }
    },

    async store (req, res) {
        try {
            const {name , email} = req.body;
            const user = await User.create({name, email})
            return res.json(user)
        }
        catch (err) {
            console.error("There was an error:", err.message);
        }
        
    }
}