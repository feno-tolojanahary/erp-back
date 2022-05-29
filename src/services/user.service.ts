import { CreateUserDto } from "@dtos/user.dto";
import { HttpException } from "@exceptions/HttpException";
import User from "@models/user.model";
import { Op } from "sequelize";

class UserService {
    public user = User;

    public async createUser(userData: CreateUserDto): Promise<User> {
        const findUser = await this.user.findOne({ where: { [Op.or]: [ { email: userData.email }, { name: userData.name } ]} });
        if (findUser) {
            throw new HttpException(400, "User already exists");
        }
        const createdUser: Promise<User> = this.user.create(userData as User);
        return createdUser;
    }

    public async findAllUser(): Promise<User[]> {
        const allUsers: User[] = await this.user.findAll();
        return allUsers;
    }

    public async updateUser(userData: CreateUserDto, id: number): Promise<User | null> {
        await this.user.update(userData, {where: { id }});
        const updatedData: Promise<User | null> = this.user.findByPk(id);
        return updatedData;
    }

    public deleteUser(id: number): Promise<number> {
        const destroyedResult: Promise<number> = this.user.destroy({ where: { id }});
        return destroyedResult;
    }
}

export default UserService;