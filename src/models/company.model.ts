import { Model, Optional, DataTypes } from "sequelize";
import Address from "./address/address.model";
import ContactModel from "./contact.model";
import sequelize from "./sequelize";

// Entity
export interface CompanyAttributes {
    id: number,
    name: string,
    taxID?: string | null | undefined,
    phone?: string | null | undefined,
    mobile?: string | null | undefined,
    website?: string | null | undefined,
    addressId?: number,
    email: string,
    tagId: number,

    address?: any
}

// Creation Attribute
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id' | 'taxID' | 'phone' | 'mobile' | 'website'>{}

// Instance
export interface CompanyInstance extends Model<CompanyAttributes, CompanyCreationAttributes>, CompanyAttributes {}

// Class entity
class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
    declare id: number;
    declare name: string;
    declare taxID?: string | null | undefined;
    declare phone?: string | null | undefined;
    declare mobile?: string | null | undefined;
    declare website?: string | null | undefined;
    declare email: string;
    declare tagId: number;
    declare addressId?: number;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;

    declare address?: number;

    static Contacts: any;
    static Address: any;
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
    addressId: {
        type: DataTypes.INTEGER,
        references: {
            model: Address,
            key: 'id'
            
        }
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

// Contact's association
// Company.hasMany(ContactModel, { foreignKey: 'companyId' });
// ContactModel.belongsTo(Company);

// Address's association

// Address.hasOne(Company);
// Company.Address = Company.belongsTo(Address, { as: "address" });

export default Company; 