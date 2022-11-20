import { CompanyAttributes } from "@models/company.model";
import { Company } from "@models/index";
import Address from "@models/address/address.model";
import BaseService from "./base.service";
import AddressState from "@models/address/addressState.model";

class CompanyService extends BaseService<Company, CompanyAttributes> {
    constructor() {
        super(Company);
    }

    public create(data: CompanyAttributes): Promise<Company> {
        return new Promise((resolve, reject) => {
            (async() => {
                try {
                    const createdCompany = await this.Model.create(data, {
                        include: [ Company.Address ]
                    });

                    // if (createdCompany.id) {
                    //     try {
                    //         const address = { ...data.address, targetId: createdCompany.id, targetType: "companies" }
                    //         await Address.create(address);
                    //     } catch(err) {
                    //         console.log("Error when creating company address: ", err);
                    //     }
                    // }

                    // await Address.create({
                    //     typeId: 3,
                    //     street: "street1",
                    //     street2: "street2",
                    //     city: "the uèèèèèèèèèèècity",
                    //     stateId: 1,
                    //     zip: "The zip code",
                    //     country: "The country",
                    //     targetId: 6,
                    //     targetType: "companies"
                    // });
                    // await AddressState.create({
                    //     companyId: 1,
                    //     country: "France",
                    //     createdBy: 1,
                    //     stateCode: "110",
                    //     stateName: "Antsirabe",
                    // })
                    // resolve({} as Company);
                    resolve(createdCompany);
                } catch(err) {
                    console.log("Error when creating company: ", err);
                    reject(err);
                }
            })()
        })
    }
}

export default CompanyService;