import UserService from '@services/user.service';
import { NextFunction, Response, Request } from 'express';
import { User } from '@interfaces/users.interface';
import { DataResponse } from '@interfaces/index.interface';
import { CreateUserDto } from '@dtos/user.dto';
import { validate } from 'class-validator';
import { HttpException } from '@exceptions/HttpException';

class UserController {
    public userService = new UserService();

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allUsers: User[] = await this.userService.findAll();
            next({ data: allUsers, message: "Users list" } as DataResponse);
        } catch(err) {
            next(err);
        }
    }

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body;
            const validationErros = await validate(new CreateUserDto(userData), { validationError: { target: false } })
            if (validationErros.length > 0) {
                throw new HttpException(500, JSON.stringify(validationErros));
            }
            const createdUserData: User = await this.userService.create(userData);
            next({ data: createdUserData, message: "User created" } as DataResponse);
        } catch(err) {
            next(err)
        }
    }

    public updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const userData = req.body;
            const result = await this.userService.update(userData, id);
            next({ data: result, message: "Updated user" });
        } catch(err) {
            next(err);
        }
    }

    public destroyUser = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const result = await this.userService.delete(id);
            next({data: result, message: "Deleted user"});
        } catch(err) {
            next(err);
        }
    }
}

export default UserController;