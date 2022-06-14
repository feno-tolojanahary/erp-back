'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('user_titles', { 
     name: { type: Sequelize.DataTypes.STRING } 
    }
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_titles');
  }
};
