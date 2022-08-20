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
      companyId: { 
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        defaultValue: 1
      },
      createdBy: {
          type: Sequelize.DataTypes.INTEGER,
          defaultValue: 1
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address_states');
  }
};
