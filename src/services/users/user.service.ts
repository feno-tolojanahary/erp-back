import { CreateUserDto } from "@dtos/user.dto";
import { HttpException } from "@exceptions/HttpException";
import User from "@models/users/user.model";
import { Op } from "sequelize";
import BaseService from "../base.service";

class UserService extends BaseService<User, CreateUserDto> {
    constructor() {
        super(User);
    }

    public async create(userData: CreateUserDto): Promise<User> {
        const findUser = await this.Model.findOne({ where: { [Op.or]: [ { email: userData.email }, { name: userData.name } ]} });
        if (findUser) {
            throw new HttpException(400, "User already exists");
        }
        return super.create(userData);
    }
}

export default UserService;