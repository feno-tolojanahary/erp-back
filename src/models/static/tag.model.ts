import sequelize from '@models/index';
import { DataTypes } from 'sequelize';

const Tag = sequelize.define('tags', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Tag;