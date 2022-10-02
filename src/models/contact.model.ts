import { DataTypes, Model,  Optional } from "sequelize";
import sequelize from "./sequelize";
import Address, { AddressAttributes } from "./address/address.model";
import User from './users/user'
import Company from "./company.model";
import Title from './users/userTitle';
import Tag from './static/tag.model';

export interface ContactAttributes {
    id: number;
    name: string;

    jobPosition: string | null;
    phone: string | null;
    mobile: string | null;
    email: string | null;
    website: string | null;
    companyId: number | null;
    addressId?: number | null;
    titleId?: number | null;
    tagId?: number | null;
    createdBy: number;

    address?: AddressAttributes;
    
    createdAt?: Date;
    updatedAt?: Date;
}

export type ContactCreationAttributes = Optional<ContactAttributes, 'jobPosition' | 'phone' | 'mobile' | 'website' | 'email' | 'companyId' | 'titleId' | 'tagId'>

export class Contact extends Model<ContactAttributes, ContactCreationAttributes> implements ContactAttributes {
    declare id: number;
    declare name: string;

    declare jobPosition: string | null;
    declare phone: string | null;
    declare mobile: string | null;
    declare email: string | null;
    declare website: string | null;
    declare companyId: number | null;
    declare addressId?: number;
    declare createdBy: number;

    declare readonly createdAt?: Date;
    declare readonly updatedAt?: Date;

    static Address: any;
    static Company: any;
    static Tag: any;
    static Title: any;
}



Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    jobPosition: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    companyId: { 
        type: DataTypes.INTEGER, 
        references: {
            model: Company,
            key: 'id'
        }
    },
    addressId: {
        type: DataTypes.INTEGER,
        references: {
            model: Address,
            key: 'id'
            
        }
    },
    titleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Title,
            key: 'id'
            
        }
    },
    tagId: {
        type: DataTypes.INTEGER,
        references: {
            model: Tag,
            key: 'id'
            
        }
    },
    createdBy: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    tableName: 'contacts',
    sequelize
})





export default Contact;