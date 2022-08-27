module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        extraDescription: {
            type: dataTypes.STRING
        },
        rate: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Movie.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        })

        Product.belongsToMany(models.User, {
            as: "users",
            through: 'cart',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        })
    }

    return Product
};