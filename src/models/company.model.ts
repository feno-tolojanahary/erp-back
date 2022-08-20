import { Model, Optional, DataTypes } from "sequelize";
import Address from "./address/address.model";
import ContactModel from "./contact.model";
import sequelize from ".";

// Entity
export interface CompanyAttributes {
    id: number,
    name: string,
    addressId: number,
    taxID?: string | null | undefined,
    phone?: string | null | undefined,
    mobile?: string | null | undefined,
    website?: string | null | undefined,
    email: string,
    tagId: number
}

// Creation Attribute
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id' | 'taxID' | 'phone' | 'mobile' | 'website'>{}

// Instance
export interface CompanyInstance extends Model<CompanyAttributes, CompanyCreationAttributes>, CompanyAttributes {}

// Class entity
class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
    declare id: number;
    declare name: string;
    declare addressId: number;
    declare taxID?: string | null | undefined;
    declare phone?: string | null | undefined;
    declare mobile?: string | null | undefined;
    declare website?: string | null | undefined;
    declare email: string;
    declare tagId: number;
    
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

Company.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressId: {
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
    tagId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'tags',
                schema: 'public'
            },
            key: 'id'
            
        }
    }
}, {
    tableName: 'companies',
    sequelize
});

Company.hasMany(ContactModel);
ContactModel.belongsTo(Company);

export default Company;