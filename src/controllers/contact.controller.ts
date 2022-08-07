import ContactService from '@services/contact.service';
import { NextFunction, Response, Request } from 'express';
import { Contact } from '@interfaces/contact.interface';
import { CreateContactDto } from '@dtos/contact.dto';
import { validate } from 'class-validator';
import { HttpException } from '@exceptions/HttpException';
import BaseController from './base.controller';

class UserController extends BaseController {
    
    constructor() {
        super(ContactService);
    }

    public createContact = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("need to call create base")
            const data = req.body;
            const validationErros = await validate(new CreateContactDto(data), { validationError: { target: false } })
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