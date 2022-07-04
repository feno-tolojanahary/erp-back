import Company, { CompanyAttributes } from "@models/company.model";
import BaseService from "./base.service";

class CompanyService extends BaseService<Company, CompanyAttributes> {
    constructor() {
        super(Company);
    }
}

export default CompanyService;