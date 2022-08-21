import sequelize from '@models/index';
import { DataTypes } from 'sequelize';
import Address from '@models/address/address.model';

const AddressEntity = sequelize.define('address_entity', {
    addressId: {
        type: DataTypes.INTEGER,
        references: {
            model: Address,
            key: 'id'
        }
    },
    entityId: {
        type: DataTypes.INTEGER
    },
    entityName: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default AddressEntity;