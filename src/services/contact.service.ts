import { CreateContactDto } from "@dtos/contact.dto";
import { HttpException } from "@exceptions/HttpException";
import User from "@models/contact.model";
import { Op } from "sequelize";
import BaseService from "./base.service";

class ContactService extends BaseService<User, CreateContactDto> {
    constructor() {
        super(User);
    }

    public async create(data: CreateContactDto): Promise<User> {
        const findContact = await this.Model.findOne({ where: { [Op.or]: [ { email: data.email }, { name: data.name } ]} });
        if (findContact) {
            throw new HttpException(400, "Contact already exists");
        }
        return super.create(data);
    }
}

export default ContactService;