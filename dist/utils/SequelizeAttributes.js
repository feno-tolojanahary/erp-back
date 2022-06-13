"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const sequelize_1 = __importDefault(require("sequelize"));
const { MockQueryInterface, read } = require('./ReaderMigrationSequelize');
const newMockQueryInterface = new MockQueryInterface();
read(sequelize_1.default, newMockQueryInterface);
const SequelizeAttributes = newMockQueryInterface.attributeTables;
exports.default = SequelizeAttributes;
