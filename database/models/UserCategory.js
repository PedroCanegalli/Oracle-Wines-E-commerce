module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCategory';
    let cols = {
        userCategory_id: {
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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const UserCategory = sequelize.define(alias, cols, config); 

    UserCategory.associate = function (models) {
        UserCategory.hasMany(models.User, {
            as: "categoryUsers",
            foreignKey: "userCategory_id"
        })
    }

    return UserCategory
};