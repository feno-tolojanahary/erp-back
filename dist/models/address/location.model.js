"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const addressState_model_1 = __importDefault(require("./addressState.model"));
const addressType_model_1 = __importDefault(require("../static/addressType.model"));
const __1 = __importDefault(require(".."));
// Class entity
class Location extends sequelize_1.Model {
}
Location.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    street2: {
        type: sequelize_1.DataTypes.STRING
    },
    city: {
        type: sequelize_1.DataTypes.STRING
    },
    zip: {
        type: sequelize_1.DataTypes.STRING
    },
    typeId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: addressType_model_1.default,
            key: 'id'
        }
    },
    stateId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: addressState_model_1.default,
            key: 'id'
        }
    },
    targetId: {
        type: sequelize_1.DataTypes.INTEGER
    },
    targetType: {
        type: sequelize_1.DataTypes.STRING
    },
    country: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: __1.default,
    tableName: 'location'
});
// State's relation
// AddressState.hasMany(Location, { foreignKey: 'stateId' });
// Location.AddressState = Location.belongsTo(AddressState, { foreignKey: 'stateId' });
exports.default = Location;
