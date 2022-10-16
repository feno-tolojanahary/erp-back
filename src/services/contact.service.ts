import { ContactAttributes } from "@models/contact.model";
import { HttpException } from "@exceptions/HttpException";
import { Op } from "sequelize";
import BaseService from "./base.service";
import { Contact, Address } from "@models/index";


class ContactService extends BaseService<Contact, ContactAttributes> {
    constructor() {
        super(Contact);
    }

    public async create(data: ContactAttributes): Promise<Contact> {
        const findContact = await this.Model.findOne({ where: { [Op.or]: [ { email: data.email }, { name: data.name } ]} });
        if (findContact) {
            throw new HttpException(400, "Contact already exists");
        }
        const createdContact = await this.Model.create(data, {
            include: [ Contact.Company, Contact.Address ]
        });
        return createdContact;
    }

    public async findAll(): Promise<Contact[]> {
        return this.Model.findAll({
            where: {
                createdBy: 1
            },
            include: [ 
                Contact.Company, 
                Contact.Address,
                Contact.Title,
                Contact.Tag
            ]
        })
    }

    public async findById(id: number): Promise<Contact> {
        return this.Model.findOne({ 
            where: { id },
            include: [ 
                Contact.Company, 
                Contact.Address,
                Contact.Title,
                Contact.Tag
            ]
        });
    }

    public async update(data: ContactAttributes, id: number): Promise<Contact | null> {
        return new Promise((resolve, reject) => {
            (async () => {
              const contactPromiseUpdate: Contact | null = await this.Model.update(data, { where: { id } })
              let addressPromiseUpdate: any = null;
              if (data?.address?.id) {
                const { id } = data.address; 
                addressPromiseUpdate = await Address.update(data.address, { where: { id } })
              } else if (data?.address) {
                data.address["targetId"] = id;
                addressPromiseUpdate = await Address.create(data.address);
              }
              try {
                const results = await Promise.all([contactPromiseUpdate, addressPromiseUpdate]);
                resolve(results[0]);
              } catch(err) {
                reject(err);
              }
            })()
        })
    }
}   

export default ContactService;