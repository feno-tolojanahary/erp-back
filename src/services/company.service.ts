import Company, { CompanyAttributes } from "@models/company.model";
import BaseService from "./base.service";

class CompanyService extends BaseService<Company, CompanyAttributes> {
    constructor() {
        super(Company);
    }

    public async create(data: CompanyAttributes): Promise<Company> {
        console.log("service data: ", data)
        return this.Model.create(data, {

        }, {
            include: [ Company.Address ]
        })
    }
}

export default CompanyService;