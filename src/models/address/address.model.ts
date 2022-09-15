import { Optional, Model, DataTypes } from "sequelize";
import AddressState from "./addressState.model";
import Country from "@models/static/country.model";
import AddressType from "@models/static/addressType.model";
import sequelize from "../sequelize";

// Entity
export interface AddressAttributes {
    id: number,
    street: string,
    street2?: string,
    city: string,
    zip?: string,
    typeId: number,
    stateId: number,
    country: string,
    targetId: number,
    targetType: string
}

// Creation attribute
interface AddressCreationAttributes extends Optional<AddressAttributes, 'id' | 'street2' | 'zip'>{}
// interface AddressCreationAttributes extends Optional<AddressAttributes, 'id'>{}

// Instance
export interface AddressInstance extends Model<AddressAttributes, AddressCreationAttributes>, AddressAttributes {}

// Class entity
class Address extends Model <AddressAttributes, AddressCreationAttributes> implements AddressAttributes {
    declare id: number;
    declare street: string;
    declare street2: string;
    declare city: string;
    declare zip: string;
    declare typeId: number;
    declare stateId: number;
    declare country: string;
    declare targetId: number;
    declare targetType: string;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;

}

Address.init({
    id: {
        type: DataTypes.INTEGER,
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
    typeId: {
        type: DataTypes.INTEGER,
        references: {
            model: AddressType,
            key: 'id'
        }
    },
    stateId: {
        type: DataTypes.INTEGER,
        references: {
            model: AddressState,
            key: 'id'
        }
    },
    targetId: {
        type: DataTypes.INTEGER
    },
    targetType: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'address'
})

// State's relation
// AddressState.hasMany(Address, { foreignKey: 'stateId' });
// Address.AddressState = Address.belongsTo(AddressState, { foreignKey: 'stateId' });

export default Address;