import ContactService from '@services/contact.service';
import { NextFunction, Response, Request } from 'express';
import { CreateContactDto } from '@dtos/contact.dto';
import { validate } from 'class-validator';
import { HttpException } from '@exceptions/HttpException';
import BaseController from './base.controller';
import { DataResponse } from '@interfaces/index.interface';

class ContactController extends BaseController {
    service: ContactService;
    
    constructor() {
        super(ContactService);
        this.service = new ContactService();
        this.findById = this.findById.bind(this);
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;
            const validationErros = await validate(new CreateContactDto(data), { validationError: { target: false } })
            if (validationErros.length > 0) {
                throw new HttpException(500, JSON.stringify(validationErros));
            }
            super.create(req, res, next);
        } catch(err) {
            next(err)
        }
    }

    public async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            if (!id) {
                throw new Error("No param 'id' given");
            }
            const contact = await this.service.findById(+id);
            next({ data: contact, message: "Get conctact by id" } as DataResponse)
        } catch(err) {
            next(err)
        }
    }
}

export default ContactController;