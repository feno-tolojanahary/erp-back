'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.createTable('tags', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
     name: { type: Sequelize.DataTypes.STRING }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tags');
  }
};
 