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
        name: "Contact"
      },
      {
        name: "Invoice Address"
      },
      {
        name: "Delivery Address"
      },
      {
        name: "Other Address"
      },
      {
        name: "Private Address"
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
