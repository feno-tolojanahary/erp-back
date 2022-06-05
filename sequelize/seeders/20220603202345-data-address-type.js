'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('address_types', [
      {
        type: "Contact"
      },
      {
        type: "Invoice Address"
      },
      {
        type: "Delivery Address"
      },
      {
        type: "Other Address"
      },
      {
        type: "Private Address"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('address_types', null, {});
  }
};
