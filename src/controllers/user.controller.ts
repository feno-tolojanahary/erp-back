import UserService from '@services/users/user.service';
import { NextFunction, Response, Request } from 'express';
import { User } from '@interfaces/users.interface';
import { CreateUserDto } from '@dtos/user.dto';
import { validate } from 'class-validator';
import { HttpException } from '@exceptions/HttpException';
import BaseController from './base.controller';

class UserController extends BaseController {
    
    constructor() {
        super(UserService);
    }

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("need to call create base")
            const userData = req.body;
            const validationErros = await validate(new CreateUserDto(userData), { validationError: { target: false } })
            if (validationErros.length > 0) {
                throw new HttpException(500, JSON.stringify(validationErros));
            }
            this.create(req, res, next);
        } catch(err) {
            next(err)
        }
    }
}

export default UserController;