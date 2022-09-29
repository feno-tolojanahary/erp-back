"use strict";
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let MockQueryInterface = class MockQueryInterface {
    setAttribute(tableName, attributes) {
        this.attributeTables[tableName] = _objectSpread({}, this.attributeTables[tableName] || {}, attributes || {});
    }
    deleteAttribute(tableName, attributeName) {
        const defTable = this.attributeTables[tableName];
        if (defTable) {
            delete defTable[attributeName];
        }
    }
    getAttribute(tableName, attributeName) {
        const defTable = this.attributeTables[tableName];
        if (defTable) {
            return defTable[attributeName];
        }
        return null;
    }
    createTable(tableName, attributes) {
        this.setAttribute(tableName, attributes);
    }
    addColumn(table, key, attribute) {
        this.setAttribute(table, {
            [key]: attribute
        });
    }
    changeColumn(tableName, attributeName, dataTypeOrOptions, options) {
        this.setAttribute(tableName, {
            [attributeName]: dataTypeOrOptions
        });
    }
    removeColumn(tableName, attributeName) {
        this.deleteAttribute(tableName, attributeName);
    }
    renameColumn(tableName, attrNameBefore, attrNameAfter, options) {
        const curAttribute = this.getAttribute(tableName, attrNameBefore);
        this.setAttribute(tableName, {
            [attrNameAfter]: curAttribute
        });
        this.deleteAttribute(tableName, attrNameBefore);
    }
    renameTable(before, after, options) {
        this.attributeTables[after] = this.attributeTables[before];
        delete this.attributeTables[before];
    }
    addConstraint() {
        return this;
    }
    constructor(){
        this.attributeTables = {};
    }
};
const fs = require('fs');
const path = require('path');
function read(sequelize, mockQueryInterface) {
    const basePath = path.resolve(`sequelize/migrations`);
    const files = fs.readdirSync(basePath);
    files.forEach((file)=>{
        const script = require([
            basePath,
            file
        ].join('/'));
        script.up(mockQueryInterface, sequelize);
    });
}
module.exports = {
    MockQueryInterface,
    read
};

//# sourceMappingURL=ReaderMigrationSequelize.js.map