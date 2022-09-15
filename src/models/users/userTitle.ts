import sequelize from '@models/sequelize';
import { DataTypes } from 'sequelize';

const UserTitle = sequelize.define('user_titles', {
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

export default UserTitle;