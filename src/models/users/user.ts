import { DataTypes, Model,  Optional } from "sequelize";
import sequelize from "../.";
import { User } from "@interfaces/user.interface"

export type UserCreationAttributes = Optional<User, 'email'>

export class UserModel extends Model<User, UserCreationAttributes> implements User {
    public id!: number;
    public name!: string;
    public email!: string;
}



UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    email: DataTypes.STRING
}, {
    tableName: 'users',
    sequelize
})

export default UserModel;