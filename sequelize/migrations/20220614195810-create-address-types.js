'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address_types', {
      type: { type: Sequelize.DataTypes.STRING }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address_types');
  }
};
