import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";
import User from '../users/user';

// Entity
export interface AddressStateAttributes {
    id: number,
    stateName: string,
    stateCode: string,
    country: string,
    created_by: number,
    companyId: number
}

// Creation attribute
interface AddressStateCreationAttributes extends Optional<AddressStateAttributes, 'id'>{}

// Instance
export interface StateInstance extends Model<AddressStateAttributes, AddressStateCreationAttributes>, AddressStateAttributes {}

// Class entity
class AddressState extends Model<AddressStateAttributes, AddressStateCreationAttributes> implements AddressStateAttributes {
    declare id: number;
    declare stateName: string;
    declare stateCode: string;
    declare country: string;
    declare created_by: number;
    declare companyId: number;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}
AddressState.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stateCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyId: { 
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    created_by: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        defaultValue: 1
    }
}, {
    sequelize,
    tableName: "address_states"
})

export default AddressState;

