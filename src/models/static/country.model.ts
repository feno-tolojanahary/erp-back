import sequelize from '@models/sequelize';
import { DataTypes } from 'sequelize';

const Country = sequelize.define('address_country', {
    id: {
        type: DataTypes.INTEGER,
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
    freezeTableName: true,
    timestamps: false
})

export default Country;