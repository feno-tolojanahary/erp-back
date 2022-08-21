import ContactService from '@services/contact.service';
import { NextFunction, Response, Request } from 'express';
import { CreateContactDto } from '@dtos/contact.dto';
import { validate } from 'class-validator';
import { HttpException } from '@exceptions/HttpException';
import BaseController from './base.controller';

class ContactController extends BaseController {
    service: ContactService;
    
    constructor() {
        super(ContactService);
        this.service = new ContactService();
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;
            console.log("received body: ", data)
            const validationErros = await validate(new CreateContactDto(data), { validationError: { target: false } })
            if (validationErros.length > 0) {
                throw new HttpException(500, JSON.stringify(validationErros));
            }
            // super.create(req, res, next);
        } catch(err) {
            next(err)
        }
    }
}

export default ContactController;