'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.createTable('tags', {
     name: { type: Sequelize.DataTypes.STRING }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tags');
  }
};
