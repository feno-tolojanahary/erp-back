'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address', { 
      id: {
          type: Sequelize.DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
      },
      street: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      street2: {
          type: Sequelize.DataTypes.STRING
      },
      city: {
          type: Sequelize.DataTypes.STRING
      },
      zip: {
          type: Sequelize.DataTypes.STRING
      },
      typeId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: {
              tableName: "address_types",
              schema: "public"
            },
            key: 'id'
        }
      },
      stateId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: {
                tableName: "address_states",
                schema: "public"
              },
              key: 'id'
          }
      },
      country: {
        type: Sequelize.DataTypes.STRING
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('address');
  }
};
