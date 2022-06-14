'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     queryInterface.createTable('users', { 
        id: {
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: { 
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        jobPosition: Sequelize.DataTypes.STRING,
        phone: Sequelize.DataTypes.STRING,
        mobile: Sequelize.DataTypes.STRING,
        email: Sequelize.DataTypes.STRING,
        website: Sequelize.DataTypes.STRING,
        
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('users');
  }
};
