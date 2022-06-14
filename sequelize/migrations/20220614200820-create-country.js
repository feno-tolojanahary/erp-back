'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address_country', { 
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
          type: Sequelize.DataTypes.STRING
      },
      code: {
          type: Sequelize.DataTypes.STRING(2)
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address_country');
  }
};
