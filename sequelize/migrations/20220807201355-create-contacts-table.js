'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     queryInterface.createTable('contacts', { 
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
        companyId: { 
          type: Sequelize.DataTypes.INTEGER.UNSIGNED,
          references: {
            model: {
                tableName: 'companies',
                schema: 'public'
            },
            key: 'id'
            
          }
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
        titleId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: {
                  tableName: 'user_titles',
                  schema: 'public'
              },
              key: 'id'
              
          }
        },
        createdBy: {
          type: Sequelize.DataTypes.INTEGER,
          defaultValue: 1,
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
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('contacts');
  }
};
