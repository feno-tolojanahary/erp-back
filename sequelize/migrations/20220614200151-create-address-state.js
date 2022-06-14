'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address_states', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      stateName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      stateCode: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      country: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      created_by: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: {
                tableName: 'users',
                schema: 'public'
              },
              key: 'id'
          }
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address_states');
  }
};
