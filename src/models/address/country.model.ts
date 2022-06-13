import sequelize from '@models/index';
import { DataTypes } from 'sequelize';

const Country = sequelize.define('address_country', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    code: {
        type: DataTypes.STRING(2)
    }
}, {
    freezeTableName: true
})

export default Country;