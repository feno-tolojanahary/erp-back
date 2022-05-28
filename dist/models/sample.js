"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Keep this file in sync with the code in the "Usage" section
 * in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://root:asd123@localhost:3306/mydb');
// 'projects' is excluded as it's not an attribute, it's an association.
class User extends sequelize_1.Model {
    // getters that are not attributes should be tagged using NonAttribute
    // to remove them from the model's Attribute Typings.
    get fullName() {
        return this.name;
    }
}
class Project extends sequelize_1.Model {
}
class Address extends sequelize_1.Model {
}
Project.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize,
    tableName: 'projects'
});
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    preferredName: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: 'users',
    sequelize // passing the `sequelize` instance is required
});
Address.init({
    address: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: 'address',
    sequelize // passing the `sequelize` instance is required
});
// And with a functional approach defining a module looks like this
const Note = sequelize.define('Note', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: new sequelize_1.DataTypes.STRING(64),
        defaultValue: 'Unnamed Note'
    },
    content: {
        type: new sequelize_1.DataTypes.STRING(4096),
        allowNull: false
    }
}, {
    tableName: 'notes'
});
// Here we associate which actually populates out pre-declared `association` static and other methods.
User.hasMany(Project, {
    sourceKey: 'id',
    foreignKey: 'ownerId',
    as: 'projects' // this determines the name in `associations`!
});
Address.belongsTo(User, { targetKey: 'id' });
User.hasOne(Address, { sourceKey: 'id' });
function doStuffWithUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield User.create({
            name: 'Johnny',
            preferredName: 'John',
        });
        console.log(newUser.id, newUser.name, newUser.preferredName);
        const project = yield newUser.createProject({
            name: 'first!'
        });
        const ourUser = yield User.findByPk(1, {
            include: [User.associations.projects],
            rejectOnEmpty: true // Specifying true here removes `null` from the return type!
        });
        // Note the `!` null assertion since TS can't know if we included
        // the model or not
        console.log(ourUser.projects[0].name);
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync();
    yield doStuffWithUser();
}))();
