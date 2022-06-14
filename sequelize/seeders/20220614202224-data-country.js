'use strict';

const fs = require('fs');
const path = require('path');

const rawdata = fs.readFileSync(path.join(__dirname, '../../src/static/country.json'));
const data = JSON.parse(rawdata);

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('address_country', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('address_country', null, {});
  }
};
