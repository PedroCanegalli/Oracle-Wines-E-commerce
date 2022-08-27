module.exports = (sequelize, dataTypes) => {
    let alias = 'Invoice';
    let cols = {
        invoice_id: {
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
    const Invoice = sequelize.define(alias, cols, config); 

    Invoice.associate = function (models) {
        Invoice.hasMany(models.User, {
            as: "userInvoice",
            foreignKey: "invoice_id"
        })
    }

    return Invoice
};