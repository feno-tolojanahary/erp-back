'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address_entity', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
      entityId: {
        type: Sequelize.DataTypes.INTEGER
      },
      entityName: {
        type: Sequelize.DataTypes.STRING,
      }
    }
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address_entity');
  }
};
