import { DataTypes, Model,  Optional } from "sequelize";
import sequelize from ".";
import { Contact } from "@interfaces/contact.interface"

export type ContactCreationAttributes = Optional<Contact, 'jobPosition' | 'phone' | 'mobile' | 'website' | 'email' | 'companyId'>

export class ContactModel extends Model<Contact, ContactCreationAttributes> implements Contact {
    public id!: number;
    public name!: string;

    public jobPosition!: string | null;
    public phone!: string | null;
    public mobile!: string | null;
    public email!: string | null;
    public website!: string | null;
    public companyId!: number | null;

    public createdAt!: Date;
    public updatedAt!: Date;
}



ContactModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
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
        type: DataTypes.INTEGER.UNSIGNED, 
        defaultValue: 1 
    },
    
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    tableName: 'contacts',
    sequelize
})

export default ContactModel;