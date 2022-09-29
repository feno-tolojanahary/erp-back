"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Contact: ()=>Contact,
    default: ()=>_default
});
const _sequelize = require("sequelize");
const _sequelize1 = _interopRequireDefault(require("./sequelize"));
const _addressModel = _interopRequireDefault(require("./address/address.model"));
const _user = _interopRequireDefault(require("./users/user"));
const _companyModel = _interopRequireDefault(require("./company.model"));
const _userTitle = _interopRequireDefault(require("./users/userTitle"));
const _tagModel = _interopRequireDefault(require("./static/tag.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let Contact = class Contact extends _sequelize.Model {
};
Contact.init({
    id: {
        type: _sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    jobPosition: _sequelize.DataTypes.STRING,
    phone: _sequelize.DataTypes.STRING,
    mobile: _sequelize.DataTypes.STRING,
    email: _sequelize.DataTypes.STRING,
    website: _sequelize.DataTypes.STRING,
    companyId: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _companyModel.default,
            key: 'id'
        }
    },
    addressId: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _addressModel.default,
            key: 'id'
        }
    },
    titleId: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _userTitle.default,
            key: 'id'
        }
    },
    tagId: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _tagModel.default,
            key: 'id'
        }
    },
    createdBy: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _user.default,
            key: 'id'
        }
    },
    createdAt: _sequelize.DataTypes.DATE,
    updatedAt: _sequelize.DataTypes.DATE
}, {
    tableName: 'contacts',
    sequelize: _sequelize1.default
});
const _default = Contact;

//# sourceMappingURL=contact.model.js.map