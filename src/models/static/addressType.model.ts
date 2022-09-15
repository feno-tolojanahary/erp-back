import sequelize from '@models/sequelize';
import { DataTypes } from 'sequelize';

const AddressType = sequelize.define('address_types', {
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

export default AddressType;