module.exports = (sequelize, dataTypes) => {
    let alias = 'Interest';
    let cols = {
        id: {
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
    const Interest = sequelize.define(alias, cols, config); 

    Interest.associate = function (models) {
        Interest.hasMany(models.User, {
            as: "userInterests",
            foreignKey: "interest_id"
        })
    }

    return Interest
};