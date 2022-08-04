import { DataTypes, Model,  Optional } from "sequelize";
import sequelize from "..";
import { User } from "@interfaces/users.interface"

export type UserCreationAttributes = Optional<User, 'jobPosition' | 'phone' | 'mobile' | 'website' | 'email' | 'companyId'>

export class UserModel extends Model<User, UserCreationAttributes> implements User {
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



UserModel.init({
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
    tableName: 'users',
    sequelize
})

export default UserModel;