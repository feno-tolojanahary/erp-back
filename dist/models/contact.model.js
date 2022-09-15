"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("./sequelize"));
const address_model_1 = __importDefault(require("./address/address.model"));
const user_1 = __importDefault(require("./users/user"));
const company_model_1 = __importDefault(require("./company.model"));
class Contact extends sequelize_1.Model {
}
exports.Contact = Contact;
Contact.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    jobPosition: sequelize_1.DataTypes.STRING,
    phone: sequelize_1.DataTypes.STRING,
    mobile: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    website: sequelize_1.DataTypes.STRING,
    companyId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: company_model_1.default,
            key: 'id'
        }
    },
    addressId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: address_model_1.default,
            key: 'id'
        }
    },
    createdBy: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: user_1.default,
            key: 'id'
        }
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
}, {
    tableName: 'contacts',
    sequelize: sequelize_2.default
});
exports.default = Contact;
