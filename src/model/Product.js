const { Model, DataTypes } = require('sequelize');

class Product extends Model {

    static init (sequelize) {
        super.init({
            description: DataTypes.STRING,
            price: DataTypes.DECIMAL(10,2)
        },
        {
            sequelize
        })
    }
}
module.exports = Product