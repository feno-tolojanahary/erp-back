import { Optional, Model, DataTypes } from "sequelize";
import AddressState from "./addressState.model";
import sequelize from "..";

// Entity
export interface AddressAttributes {
    id: number,
    street: string,
    street2?: string,
    city: string,
    zip?: string,
    state_id: number,
    country_id: number
}

// Creation attribute
interface AddressCreationAttributes extends Optional<AddressAttributes, 'id' | 'street2' | 'zip'>{}

// Instance
export interface AddressInstance extends Model<AddressAttributes, AddressCreationAttributes>, AddressAttributes {}

// Class entity
class Address extends Model <AddressAttributes, AddressCreationAttributes> implements AddressAttributes {
    declare id: number;
    declare street: string;
    declare street2: string;
    declare city: string;
    declare zip: string;
    declare state_id: number;
    declare country_id: number;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

Address.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street2: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    zip: {
        type: DataTypes.STRING
    },
    state_id: {
        type: DataTypes.INTEGER,
        references: {
            model: AddressState,
            key: 'id'
        }
    },
    country_id: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'address_country',
                schema: 'public'
            },
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'address'
})

export default Address;