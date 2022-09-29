"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = _interopRequireDefault(require("sequelize"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { MockQueryInterface , read  } = require('./ReaderMigrationSequelize');
const newMockQueryInterface = new MockQueryInterface();
read(_sequelize.default, newMockQueryInterface);
const SequelizeAttributes = newMockQueryInterface.attributeTables;
const _default = SequelizeAttributes;

//# sourceMappingURL=SequelizeAttributes.js.map