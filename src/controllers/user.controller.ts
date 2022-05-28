import { NextFunction, Response, Request } from 'express';
import UserService from '../services/user.service';
import { User } from '../interfaces/users.interface';

class UserController {
    public userService = new UserService();

    public getUsers = async (req: Request, res: Response) => {
        const allUsers: User[] = await this.userService.findAllUser();
        res.status(200).json({ data: allUsers, message: "Users list" });
    }

    public createUser = async (req: Request, res: Response) => {
        const userData = req.body;
        const createdUserData: User = await this.userService.createUser(userData);
        res.status(200).json({ data: createdUserData, message: "User created" });
    }
}

export default UserController;