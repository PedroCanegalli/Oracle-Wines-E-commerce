module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        user_id: {
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
        userName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            unique: true,
            isEmail: true,
            allowNull: false
        },
        bday: {
            type: dataTypes.DATE,
            allowNull: false
        },
        invoice_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        interest_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        picture: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        userCategory_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsTo(models.Invoice, {
            as: "invoice",
            foreignKey: "invoice_id"
        })
        User.belongsTo(models.Interest, {
            as: "interest",
            foreignKey: "interest_id"
        })
        User.belongsTo(models.UserCategory, {
            as: "userCategory",
            foreignKey: "userCategory_id"
        })
        User.belongsToMany(models.Product, {
                as: "products",
                through: 'cart',
                foreignKey: 'user_id',
                otherKey: 'product_id',
                timestamps: false
        })
    }
    
    return User
};