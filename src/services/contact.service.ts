import { ContactAttributes } from "@models/contact.model";
import { HttpException } from "@exceptions/HttpException";
import { Op } from "sequelize";
import BaseService from "./base.service";
import { Company, Contact } from "@models/index";


class ContactService extends BaseService<Contact, ContactAttributes> {
    constructor() {
        super(Contact);
    }

    public async create(data: ContactAttributes): Promise<Contact> {
        console.log("received data: ", data);
        const findContact = await this.Model.findOne({ where: { [Op.or]: [ { email: data.email }, { name: data.name } ]} });
        if (findContact) {
            throw new HttpException(400, "Contact already exists");
        }
        const createdContact = await this.Model.create(data, {
            include: [ "companies" ]
        });
        return createdContact;
    }

    public async findAll(): Promise<Contact[]> {
        return this.Model.findAll({
            where: {
                createdBy: 1
            },
            include: [ Contact.Company, Contact.Address ]
        })
    }

    public async findById(id: number): Promise<Contact> {
        return this.Model.findOne({ 
            where: { id },
            include: [ Contact.Company, Contact.Address ]
        });
    }
}

export default ContactService;