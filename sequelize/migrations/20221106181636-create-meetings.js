'use strict';

module.exports = {
  async up (queryInterface, { DataTypes }) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: INTEGER });
     */
    await queryInterface.createTable('meeting_events', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      contactId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
              tableName: "contacts",
              schema: "public"
            },
            key: 'id'
        }
      },
      ownerId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'public'
          },
          key: 'id'
        }
      },
      title: {
        type: DataTypes.STRING
      },
      allDay: {
        type: DataTypes.BOOLEAN
      },
      start: {
        type: DataTypes.DATE
      },
      end: {
        type: DataTypes.DATE
      },
      description: {
        type: DataTypes.STRING
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('meeting_events');
  }
};
