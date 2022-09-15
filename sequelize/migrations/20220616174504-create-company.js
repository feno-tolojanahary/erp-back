'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('companies', { 
      id: {
          type: Sequelize.DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      taxID: {
          type: Sequelize.DataTypes.STRING,
      },
      phone: {
          type: Sequelize.DataTypes.STRING,
      },
      mobile: {
          type: Sequelize.DataTypes.STRING,
      },
      website: {
          type: Sequelize.DataTypes.STRING,
      },
      email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      addressId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'address',
                schema: 'public'
            },
            key: 'id'
            
        }
      },
      tagId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: {
                  tableName: 'tags',
                  schema: 'public'
              },
              key: 'id'
              
          }
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('companies');
  }
};
