const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
}, {
    tableName: 'addresses',
});

// Define the association back to User
Address.associate = (models) => {
    Address.belongsTo(models.User, {
        foreignKey: 'userId',
    });
};

module.exports = Address;
