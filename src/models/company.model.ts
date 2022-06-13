import { Model, Optional, DataTypes } from "sequelize";
import Address from "./address/address.model";
import sequelize from ".";

// Entity
export interface CompanyAttributes {
    id: number,
    name: string,
    address_id: number,
    taxID?: string | null | undefined,
    phone?: string | null | undefined,
    mobile?: string | null | undefined,
    website?: string | null | undefined,
    email: string,
    tag_id: number
}

// Creation Attribute
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id' | 'taxID' | 'phone' | 'mobile' | 'website'>{}

// Instance
export interface CompanyInstance extends Model<CompanyAttributes, CompanyCreationAttributes>, CompanyAttributes {}

// Class entity
class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
    declare id: number;
    declare name: string;
    declare address_id: number;
    declare taxID?: string | null | undefined;
    declare phone?: string | null | undefined;
    declare mobile?: string | null | undefined;
    declare website?: string | null | undefined;
    declare email: string;
    declare tag_id: number;
    
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

Company.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Address,
            key: 'id'
        }
    },
    taxID: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    mobile: {
        type: DataTypes.STRING,
    },
    website: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'user_tags',
                schema: 'public'
            },
            key: 'id'
            
        }
    }
}, {
    tableName: 'companies',
    sequelize
});

export default Company;