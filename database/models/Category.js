module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        productCategory_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: "productcategory",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config); 

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        })
    }

    return Category
};