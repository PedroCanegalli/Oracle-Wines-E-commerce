module.exports = (sequelize, dataTypes) => {
    let alias = 'Interest';
    let cols = {
        interest_id: {
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
        tableName: "interest",
        timestamps: false
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