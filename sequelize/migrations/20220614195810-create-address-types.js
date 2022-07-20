'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address_types', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: Sequelize.DataTypes.STRING }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address_types');
  }
};
